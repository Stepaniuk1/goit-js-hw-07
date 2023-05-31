import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(`.gallery`);

galleryItems.forEach(function (item) {
  let imgAtt = item.original;

  const listItem = document.createElement(`li`);
  listItem.classList.add("gallery__item");

  const link = document.createElement(`a`);
  link.classList.add("gallery__link");
  link.href = imgAtt;

  const image = document.createElement(`img`);
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.setAttribute(`data-source`, `${imgAtt}`);
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: `alt`,
  captionDelay: 250,
});

console.log(galleryItems);
