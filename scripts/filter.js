async function main() {
  const blackListTags = await getBlacklistTags();
  const blacklist = new Set(blackListTags);

  const imageList = document.querySelector(".image-list");
  const posts = imageList?.querySelectorAll("span");
  const unwantedPosts = [];

  posts?.forEach((post) => {
    if (isInBlackList(post, blacklist)) unwantedPosts.push(post);
  });

  unwantedPosts.forEach((post) => (post.style.display = "None"));
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
