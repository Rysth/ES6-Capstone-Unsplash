import { getImageByID } from './unsplash';

window.addEventListener('load', async () => {
  const modalElement = document.querySelector('#modal');
  const mainElement = document.querySelector('#main');
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
          <li class="modal-item active">
            <a href="${imageData.download_url}" id="page" target="_blank">
              <span class="fw-bold">Page:</span> 
              Download
            </a>
          </li>
        </ul>
    `;

    modalElement.style.display = 'block';
  }
});
