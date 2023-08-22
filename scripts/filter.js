// Might want to move this somewhere else...
const blacklist = new Set(["nijisanji", "hololive"]);

const imageList = document.querySelector(".image-list");

const posts = imageList?.querySelectorAll("span");

const unwantedPosts = [];

posts?.forEach(post => {
    if (isInBlackList(post)) unwantedPosts.push(post);
});

unwantedPosts.forEach(post => post.style.display = "None");

function isInBlackList(post) {
    // It is observed that alt and title attribute contain tags
    let tags = post.querySelector("img").alt.trim().split(" ");

    return tags.some(tag => blacklist.has(tag));
}
