async function main() {
  const blackListTags = await getBlacklistTags();
  const blacklist = new Set(blackListTags);

  const imageList = document.querySelector(".image-list");
  const posts = imageList?.querySelectorAll("span");

  // Hide all posts initially to avoid the blinking of blacked listed posts before it is hidden.
  const whitelistPosts = [];

  posts?.forEach((post) => {
    if (isInWhitelist(post, blacklist)) {
      whitelistPosts.push(post);
    }
  });

  whitelistPosts.forEach((post) => (post.style.display = "inline-block"));
}

async function getBlacklistTags() {
  const blacklistTagsURL = chrome.runtime.getURL("blacklist-tags.json");

  return await fetch(blacklistTagsURL).then((res) => res.json());
}

function isInWhitelist(post, blacklist) {
  // `alt` attribute in `img` contains the tags
  let tags = new Set(post.querySelector("img").alt.trim().split(" "));

  return tags.isDisjointFrom(blacklist);
}

main();
