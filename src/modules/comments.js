import { getImageByID } from './unsplash';

window.addEventListener('load', async () => {
  const modalImageElement = document.querySelector('#modal-image');
  const imageData = await getImageByID(2);

  if (imageData) {
    modalImageElement.src = imageData.download_url;
  }
});
