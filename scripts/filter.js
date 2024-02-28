async function main() {
  const blackListTags = await getBlacklistTags();
  const blacklist = new Set(blackListTags);

  const imageList = document.querySelector(".image-list");
  const posts = imageList?.querySelectorAll("span");

  // Hide all posts initially to avoid the blinking of blacked listed posts before it is hidden.
  const whitelistPosts = [];

  posts?.forEach((post) => {
    if (!isInBlackList(post, blacklist)) {
      whitelistPosts.push(post);
    }
  });

  whitelistPosts.forEach((post) => (post.style.display = "inline-block"));
}

async function getBlacklistTags() {
  const blacklistTagsURL = chrome.runtime.getURL("blacklist-tags.json");

  return await fetch(blacklistTagsURL).then((res) => res.json());
}

function isInBlackList(post, blacklist) {
  // It is observed that alt and title attribute contain tags
  let tags = post.querySelector("img").alt.trim().split(" ");

  return tags.some((tag) => blacklist.has(tag));
}

main();
