# Description
A chrome extension that filter out images according to given blacklist. Once activated
it will hide all the images that are inside the blacklist

# Getting started
1. Fork and clone this repo
2. [Turn on Extension developer mode](https://developer.chrome.com/docs/extensions/mv3/faq/#faq-dev-01)
3. In chrome, go to chrome://extensions
4. In top left corner, click `load unpacked` and select the folder that contain this repo.

# Include own tags
Inside scripts/filter.js, simply include tags inside the blacklist constructor

# Why you might want to use it
* Existed blacklist wasn't working on author device
* Unlimited amount of blacklist tags (if you have more than 2500 characters of tags, that is...)
* Once activated, it will hide all blacklisted images inside the website at all time

# Improvements?
* Improve user experience.
  Currently it hide all images that are blacklisted, as such there might be a flash
  of those images when loading the page. One of the workaround might be hiding all
  the images by default, then only showing non-blacklisted image.
* Support regexp.
  Well... though its definitely fun to actually have some real life application
  with regexp, and its relatively easy to support it... Include an array
  of regexp and attempt to match the tags one by one sounds costly, no?
* Include hotkey to toggle activation. As current extension is basically
  just a content script, it is not design to be toggle around AFAAK (As Far As Author Know).
* Get a real icon. Current icon is just a pile of green. Not an icon.
* Manage tags with a dialog. Sounds fun. Might work on it on the future.
