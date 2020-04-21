+++
title = "KDE Wallet"
description = "KDE Wallet Manager is a tool to manage passwords on the KDE Plasma system. By using the KWallet subsystem it not only allows you to keep your own secrets but also to access and manage the passwords of every application that integrates with KWallet."
date = 2020-04-20
[taxonomies]
category = ["KDE"]
+++

## Unlock KDE Wallet automatically on login

To unlock KDE Wallet automatically on login, Install kwallet-pam for the PAM compatible module. The chosen KWallet password must be the same as the current user password.

{% note(head="Note:") %}

* kwallet-pam is not compatible with GnuPG keys, the KDE Wallet must use the standard blowfish encryption.
* The wallet cannot be unlocked when using autologin.
* The wallet cannot be unlocked when using a fingerprint reader to login
* The wallet must be named kdewallet (default name). It does not unlock any other wallet(s).
* If using KDE, one may want to disable Close when last application stops using it in KDE Wallet settings to prevent the wallet from being closed after each usage (WiFi-passphrase unlock, etc.).
* It may be needed to remove the default created wallet first, thus removing all stored entries.
* If the kwallet Migration Assistant asks for a password after every login, rename or delete the ~/.kde4/share/apps/kwallet folder.

{% end %}

Optional install kwalletmanager for the wallet management tool. This tool can be used to create a KDE Wallet with `blowfish` encryption and more settings not provided by the kcm-module.

{% tip(head="Tip:") %}

An alternative is to use **KWalletManager** and set an empty Kwallet-password, thus preventing the need of entering a password to unlock a wallet. Simply do not enter a password on both fields in Change Password... This may however lead to unwanted (read/write) access to the user's wallet. Enabling Prompt when an application accesses a wallet under Access Control is highly recommended to prevent unwanted access to the wallet.

{% end %}

### Configure PAM

The following lines must be present under their corresponding sections:

```pam
auth            optional        pam_kwallet5.so
session         optional        pam_kwallet5.so auto_start
```

Edit the PAM configuration corresponding to your situation:

* For SDDM no further edits should be needed because the lines are already present in `/etc/pam.d/sddm`
* For GDM edit `/etc/pam.d/gdm-password` accordingly.
* For LightDM edit `/etc/pam.d/lightdm` and `/etc/pam.d/lightdm-greeter` files:
* For unlocking on tty login (no display manager), edit `/etc/pam.d/login` accordingly

```pam
/etc/pam.d/lightdm

#%PAM-1.0
auth            include         system-login
auth            optional        pam_kwallet5.so

account         include         system-login

password        include         system-login

session         include         system-login
session         optional        pam_kwallet5.so auto_start
```

## Using the KDE Wallet to store ssh key passphrases

{% note(head="Note:") %}
A SSH agent should be up and running.
{% end %}

Install ksshaskpass package.

Create an autostart script file and mark it as executable: 

```shell
~/.config/autostart-scripts/ssh-add.sh

#!/bin/sh
ssh-add -q < /dev/null
```

{% tip(head="Tip:") %}
The above ssh-add.sh script will only add the default key `~/.ssh/id_rsa`. Assuming you have different SSH keys named `key1`, `key2`, `key3` in `~/.ssh/`, you may add them automatically on login by changing the above script to:

```sh
~/.config/autostart-scripts/ssh-add.sh

#!/bin/sh
ssh-add -q ~/.ssh/key1 ~/.ssh/key2 ~/.ssh/key3 < /dev/null
```

{% end %}

You also have to set the `SSH_ASKPASS` environment variable to `ksshaskpass`. For example, create the following autostart script file and mark it executable:

```sh
~/.config/plasma-workspace/env/askpass.sh

#!/bin/sh

export SSH_ASKPASS='/usr/bin/ksshaskpass'
```

It will ask for your password and unlock your SSH keys. Upon restart your SSH keys should be unlocked once you give your kwallet password.

To add a new key and store the password with kwallet use the following command

```sh
ssh-add /path/to/new/key </dev/null
```

## Using the KDE Wallet to store Git credentials

Git can delegate credential handling to a credential helper. By using ksshaskpass as a credential helper, the HTTP/HTTPS and SMTP passwords can be safely stored in the KDE Wallet.

Install the ksshaskpass package.

Configure Git by setting the `GIT_ASKPASS` environment variable:

```sh
~/.config/plasma-workspace/env/askpass.sh

#!/bin/sh

export GIT_ASKPASS='/usr/bin/ksshaskpass'
```

{% tip(head="Tip:") %}

If the `SSH_ASKPASS` environment variable is set to ksshaskpass, then additionally setting `GIT_ASKPASS` is not required.

{% end %}

See gitcredentials(7) for alternatives and more details.

## KDE Wallet for Chrome and Chromium

Chrome/Chromium has built in wallet integration. To enable it, run Chromium with the `--password-store=kwallet` or `--password-store=detect` argument. To make the change persistent, see Chromium/Tips and tricks#Making flags persistent. (Setting CHROMIUM_USER_FLAGS will not work.)

### Query passwords from the terminal

Instead of storing passwords in plain text files, you can manually add new entries in your wallet and retrieve them with *kwallet-query*.

For example, if you want to log into the Docker Hub registry with Podman, which supports getting the passwords from stdin with the `--password-stdin` flag, you can use the following command to login:

```sh
kwallet-query -r folder_entry wallet_name -f folder_name | podman login docker.io -u dockerhub_username --password-stdin
```

This way, your password is not stored in any text file and neither is it stored in the terminal history file.

## Unlocking KWallet automatically in i3

To unlock KWallet protected by the login password, it is necessary to add

```ps1
exec --no-startup-id /usr/lib/pam_kwallet_init
```

to the i3 config file in addition to configuring PAM.

## See also

* **[Unlocking KWallet with PAM](https://www.dennogumi.org/2014/04/unlocking-kwallet-with-pam/)**