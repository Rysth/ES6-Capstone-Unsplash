import { getImages, getImageByID } from './unsplash';

const cards = await getImages();
const cardsCon = document.querySelector('.cards');

const displayModal = async (cardID) => {
  const imageData = await getImageByID(cardID);

  const modalElement = document.querySelector('#modal');
  const modalBackground = document.querySelector('#modal-background');
  const modalInformation = document.querySelector('#modal-information');
  const modalClose = document.querySelector('#modal-close');

  modalClose.addEventListener('click', () => {
    modalBackground.classList.remove('active');
    modalInformation.innerHTML = '';
  });

  modalBackground.addEventListener('click', () => {
    modalBackground.classList.remove('active');
    modalInformation.innerHTML = '';
  });

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
          <li class="modal-item"><span class="fw-bold">ID:</span> ${imageData.id}</li>
          <li class="modal-item active">
            <a href="${imageData.download_url}" id="page" target="_blank">
              <span class="fw-bold">Page:</span> 
              Download
            </a>
          </li>
        </ul>
    `;
  modalElement.style.display = 'block';
  modalBackground.classList.add('active');
};

cards.forEach((card) => {
  const cardElement = document.createElement('div');
  cardsCon.appendChild(cardElement);
  cardElement.setAttribute('id', card.id);
  cardElement.classList.add('card');
  cardElement.getAttribute('id', 'card');

  const img = document.createElement('img');
  cardElement.appendChild(img);
  img.classList.add('card-img');
  img.setAttribute('src', card.download_url);
  img.getAttribute('id', 'card-img');

  const smallCont = document.createElement('div');
  cardElement.appendChild(smallCont);
  smallCont.classList.add('small-cont');
  smallCont.getAttribute('id', 'small-cont');

  const h3 = document.createElement('h3');
  smallCont.appendChild(h3);
  h3.classList.add('h3');
  h3.innerHTML = card.author;

  const likes = document.createElement('div');
  smallCont.appendChild(likes);
  likes.classList.add('likes');
  likes.getAttribute('id', 'likes');

  const icon = document.createElement('i');
  likes.appendChild(icon);
  icon.classList.add('fa-solid', 'fa-heart');

  const likesCount = document.createElement('p');
  likes.appendChild(likesCount);
  likesCount.classList.add('likes-count');
  likesCount.getAttribute('id', 'likes-count');
  likesCount.innerHTML = '5 likes';

  const btns = document.createElement('div');
  cardElement.appendChild(btns);
  btns.classList.add('buttons');
  smallCont.getAttribute('id', 'buttons');

  const commentBtn = document.createElement('button');
  btns.appendChild(commentBtn);
  commentBtn.classList.add('card-btn');
  commentBtn.getAttribute('id', 'comment');
  commentBtn.innerHTML = 'Comments';
  commentBtn.addEventListener('click', () => {
    displayModal(cardElement.id);
  });

  const reserveBtn = document.createElement('button');
  btns.appendChild(reserveBtn);
  reserveBtn.classList.add('card-btn');
  reserveBtn.getAttribute('id', 'reservation');
  reserveBtn.innerHTML = 'Reservations';
});
