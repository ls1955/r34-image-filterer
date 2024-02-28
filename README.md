# Description
A chrome extension that hide images according to given blacklist in certain website.

# Getting started
1. Fork/clone this repo.
2. [Turn on Extension developer mode](https://developer.chrome.com/docs/extensions/mv3/faq/#faq-dev-01).
3. In chrome, go to `chrome://extensions`.
4. In top left corner, click `load unpacked` and select the folder that contain this repo.
5. Go to *that* website, try searching for posts including tags inside `blacklist-tags.json` to ensure the extension is working.

# Include own tags
Include them inside `blacklist-tags.json`.

# Why you might want to use it
* Existed blacklist feature in that website wasn't working for author, for some reason.
* Unlimited amount of blacklist tags (if you have more than 2500 characters of tags, that is...).
* Once activated, it will hide all blacklisted images automatically inside certain website until it is deactivated/removed.

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
