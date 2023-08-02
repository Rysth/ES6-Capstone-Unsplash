import { getImageByID } from './unsplash';

window.addEventListener('load', async () => {
  const modalElement = document.querySelector('#modal');
  const modalInformation = document.querySelector('#modal-information');
  const imageData = await getImageByID(4);

  if (imageData) {
    modalInformation.innerHTML = `
       <img
          loading="lazy"
          id="modal-image"
          src="${imageData.download_url}"
          alt="Preview Image - ${imageData.author}"
          class="modal-image"
        />
        <p class="modal-title">${imageData.author}</p>
        <ul class="modal-list">
          <li class="modal-item"><span class="fw-bold">Width:</span> ${imageData.width}px</li>
          <li class="modal-item">
            <span class="fw-bold">Height:</span> ${imageData.height}px
          </li>
          <li class="modal-item"><span class="fw-bold">Author:</span> ${imageData.author}</li>
          <li class="modal-item">
            <span class="fw-bold">Page:</span> 
            <a href="${imageData.url}" id="page">Credits</a>
          </li>
        </ul>
    `;

    modalElement.style.display = 'block';
  }
});
