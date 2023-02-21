// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
// Nuevo array de elementos <a> que contienen imágenes y subtítulos
const galleryElements = galleryItems.map(item => `
  <a href="${item.original}" class="gallery__item" data-subtitle="${item.description}">
    <img src="${item.preview}" alt="${item.description}" class="gallery__image" data-source="${item.original}">
  </a>
`).join('');

gallery.innerHTML = galleryElements;

// Evento de click a cada imagen
const images = gallery.querySelectorAll(".gallery__image");
images.forEach(image => {
    image.addEventListener("click", event => {
        event.preventDefault();
        const source = image.closest('.gallery__item').href;
        const title = image.alt;
        const lightbox = new SimpleLightbox(`<img src="${source}" alt="${title}">`);
        lightbox.open();
    });
});

// Inicio de la biblioteca SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, // Mostrar subtítulos
    captionDelay: 250 // Retraso de 250 milisegundos para mostrar el subtítulo
});
