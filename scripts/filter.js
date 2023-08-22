// Might want to move this somewhere else...
const blacklist = [
    "nijisanji",
    "hololive",
    /a/
];

blacklist.forEach(tag => console.log(typeof tag));

const imageLists = document.querySelector(".image-list");
const images = imageLists.querySelectorAll("span");

const filteredImages = [];

images.forEach(image => () => {
    if isBlackList? image {
        filteredImages.push(image);
    }
});

filteredImages.forEach(image => hide the image)

