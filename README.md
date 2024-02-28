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
