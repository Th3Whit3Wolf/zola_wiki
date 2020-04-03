+++
title = "Article Naming Guideline"
description = "Article naming is one of the most important tasks for wiki writers and editors. This article is a complete guideline on choosing appropriate article names, and also presents MagniWiki writers and editors with some issues to consider when naming their articles."
date = 2020-04-02
[taxonomies]
category = ["Help"]
+++

## About Article Names

Article names serve two purposes. They are identifiers of the wiki content on the MagniWiki site. Also, they are means by which readers identify the content. Therefore, an article name has to be unique and descriptive.

Sometimes, article names reflect the type of article content, and also offer additional information like language in which the article was written.

## Descriptive Names

**Names should be as specific as possible, and they should reflect the article scope.**

Documentation projects are seldom like software/hardware reviews commonly seen in newspapers and news sites. Documentation is usually read when some problem arises, or some other specific need has to be met. Therefore, quick identification of those needs and swift solution is of utmost importance. For improved readability and faster access to information, article names (and, therefore, their titles) should be as descriptive and specific as the article scope permits.

### Example

Titles like "Boost omni" may be misleading for most readers. Some of the readers may be looking to boost some aspect of omni, and that aspect may not necessarily be the aspect described in the article. Therefore, the article name must be as specific as possible without being too long to quickly scan. Such an article may be renamed to read "How to improve omni download speed using wget, snarf, and lftp".

## Allowing for Article Enhancement

**Names should be general enough to allow for future enhancement of the article contents.**

In order to allow room for future edits and enhancements, an article's name sometimes needs to be less specific. Of course, making article names less specific just for the sake of shortening it is not a good idea. On the other hand, if you think you have covered all the bases, and that no future edits will enhance the article's scope, make your article's name as specific as possible.

### Example

Let us go back to the previous example. The new title of the article is "Improve omni download speed using wget, snarf, and lftp". However, some day, new download managers may emerge that would replace or become an alternative to wget, snarf, and/or lftp. This calls for a more generic title, something like: "How to improve omni download speed using alternative download managers".

## Shorten Article Names

**Names should be as short as possible.**

Making article names short is important in order to allow quick scanning of article listings. Many people use the browsing technique when reading wikis, so you do not want to waste their time by writing article names that are miles long. Also, shorter names tend to sound more professional.

Hereinafter, we will use this name as an example: "How to improve omni download speed using alternative download managers".

We will cover a few techniques that will help us shorten the name. There are probably many more techniques that do not apply to this particular example, but you will still get insight into the concept of title editing.

{% note(head="Note:") %}
Literal translation of this article may prove to be a challenge for most languages. Please try to find alternative titles that may serve better for your language. Also, other languages may require different techniques than English.
{% end %}

### Avoid Using Question Form

Instead of saying "How to improve", simply say "Improve".

Now compare the two:

* "How to improve omni download speed using alternative download managers"
* "Improve omni download speed using alternative download managers"

### Rewording Long Parts

The text "Improve omni download speed" is rather long. Instead, we will say "Speed up omni download".

Now compare:

* "Improve omni download speed using alternative download managers"
* "Speed up omni download using alternative download managers"

### Avoid Fancy Words

Fancy words (like "alternative" in our example) are not only fancy; they are used less often than ordinary words, and thus tend to be longer. It is well known that words that are used regularly are in most cases shorter, so try to find an ordinary alternative for your words.

Instead of saying "alternative", you may say "other".

Compare the two versions:

* "Speed up omni download using alternative download managers"
* "Speed up omni download using other download managers"

### Deviating From Formal Technical Expressions

This may be frowned upon by some of the more technically oriented users, but most people would not mind at all. Avoid technical terms if that makes your article names shorter.

Instead of saying "download managers", you may say "downloaders".

Compare:

* "Speed up omni download using other download managers"
* "Speed up omni download using other downloaders"

### Review the Result

Do not get too excited yet. We still need to review the two titles and see if they still communicate the same meaning.

* "How to improve omni download speed using alternative download managers"
* "Speed up omni download using other downloaders"

Okay, we see the end result is a much shorter article name, but what about its meaning? Well, it certainly seems like we did a good job. But now we have a different problem. omni is not a downloader; both "alternative download managers" and "other downloaders" imply that omni is a downloader, which is not what we want. We need to change the meaning by saying "external downloaders".

Compare:

* "How to improve omni download speed using alternative download managers"
* "Speed up omni download using other downloaders"
* "Speed up omni download using external downloaders"

## Multi-Language Articles

When creating a translation simply create a new markdown file with the same name as the english one (and in the same dirrectory) but appened a decimal followed the i18n code,  bettween the file name and file extension.

### Example

* `content/an-article.md`    English article
* `content/an-article.fr.md` French article
