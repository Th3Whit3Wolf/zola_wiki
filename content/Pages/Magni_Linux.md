+++
title = "Magni Linux"
description = """Magni Linux is an independently developed, x86-64 general purpose Linux distribution that strives to provide the latest stable versions of most software by following a rolling release model.
The default installation is a minimalistic base system, configured by the user to only add what is purposely required while also providing sensible defaults to give the user a better experience."""
date = 2020-03-31
[taxonomies]
category = ["About Magni"]
+++

## Principles

### Simplicity

Magni Linux defines simplicity as **_sensible defaults without unnecessary additions or modifications_**. It ships software as released by the original developers ([upstream](https://en.wikipedia.org/wiki/Upstream_(software_development))) with minimal distribution-specific (downstream) changes: patches not accepted by upstream are avoided, and Magni's downstream patches consist almost entirely of backported bug fixes thar are obsoleted by the project's next release.

In a similiar fashion, Magni ships the configuration files provided by upstream with changes to distribution-specfic issues, like adjusting the system file paths, sometimes with better defaults for the average user, and potentially udev rules(or other system configuration settings) to give the user the most performance and best experience.
Magni's package manager, omni, config file `/etc/omni.conf` allows you to configure whether or not you'd like a package's service to be enabled or not after being installed. It also allows you to choose whether or not you'd like to enable the Omni User Repository.

Pacakges are only split when compelling advatages exist, such as to save disk space in particularly bad cases of waste. GUI configuration utilities are not officially provided, encouraging users to perform most system configuration from the shell and a text editor.

### Modernity

Magni Linux strives to maintain the latest stabke release versions of its software as long as systemic breaking changes can be reasonably avoided.
It is based on a [rolling-release](https://en.wikipedia.org/wiki/Rolling_release) system, which allows a one-time installation with continuos upgrades.

Magni incorporates many of the newer features available to Linux users, including [systemd](https://wiki.archlinux.org/index.php/Systemd) init system, modern [file systems](https://wiki.archlinux.org/index.php/File_systems), LVM2, software RAID, udev support and inintcpio (with [dracut](https://wiki.archlinux.org/index.php/Dracut)), as well as the latest available kernels.

### Pragmatism/Idealogical

Magni tries to be pragmatic. The principles here are only useful guidelines.
Ultimately, design decisions are made on a case-by-case basis through developer consensus.
Evidence-based technical analysis and debate are what matter, not politics or popular opinion.

Magni Linux seprates it's repositories similiar to Debian source components.

* **Main** consist of [DFDSG](https://www.debian.org/social_contract#guidelines)-compliant packages, which do not rely on software outside this arena to operate. These are the only packages considered part of Magni Linux.

* **Contrib** packages contain DFSG-compliant software, but have dependencies not in main (possibly package for Magni Linux in non-free)

* **Non_Free** contains software that does not comply with DFSG.

### Small, Fast, Featureful

Magni Linux take a different path than most Linux distros in that it tries to replace normal tools written in C with similiar tools that are faster written in safer languages. We use these tools because they are faster and have fewer bugs and vulnerabilities. Many of these tools also have more features than their C counterpart.

Magni Linux intends to be competitive with fastest of Linux distros, with that goal in mind many of packages in the Magni Linux use PGO (Profile Guided Optimization), and Static Linking, and other optimizations.

### Versatility

Magni Linux is a general-purpose distribution. Upon installation, only a command-line environment is provided: rather than tearing out unneeded and unwanted packages, the user is offered the ability to build a custom system by choosing among thousands of high-quality packages provided in the official repositories for the x86-64 architecture.

Arch is backed by omni, a lightweight, simple and fast package manager that allows to upgrade the entire system with one command. Magni also provides the Magni Build System, a ports-like system to make it easy to build and install packages from source, which can also be synchronized with one command. In addition, the Omni User Repository contains many thousands more of community-contributed pkg.mk scripts for compiling installable packages from source. It is also possible for users to build and maintain their own custom repositories with ease.

## History

### The Early Years (now)

David Karrick, an American programmer, began working on Magni Linux in 2020. Inspired by Clear Linux, Arch Linux(and some of it's derivatives), and Void Linux.
