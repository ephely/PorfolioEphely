const images = document.querySelectorAll('.gallery img');
const mediaPreviews = document.querySelectorAll('.media-preview');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');

images.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxContent.innerHTML = `<img src="${img.src}" alt="" />`;
  });
});

mediaPreviews.forEach((el) => {
  el.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    if (el.tagName.toLowerCase() === 'video') {
      const src = el.querySelector('source')?.src || el.src;
      lightboxContent.innerHTML = `
        <video src="${src}" autoplay loop muted controls style="max-width: 90vw; max-height: 80vh; border-radius: 12px;"></video>
      `;
    } else if (el.tagName.toLowerCase() === 'img') {
      lightboxContent.innerHTML = `<img src="${el.src}" alt="" />`;
    }
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxContent.innerHTML = '';
});
