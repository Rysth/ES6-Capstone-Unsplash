// Import statements
import { getImages, getImageByID } from './unsplash';
import { getAppID, getComments, setComment, getLikes } from './involvement';
import { countComments } from './counters/comments';
import { countCards } from './counters/cards';

// Function to get or assign the Application ID
const loadApp = async () => {
  const application = await getAppID();
  const item = localStorage.getItem('APPID');
  if (!item) {
    localStorage.setItem('APPID', application);
    return application;
  }
  return item;
};

// Global Const for Application ID
const APPID = await loadApp();

// Function to load and display comments for a specific item (card)
const loadComments = async (itemID) => {
  const commentData = await getComments(APPID, itemID);
  countComments(commentData);
  const modalComments = document.querySelector('#modal-comments');
  modalComments.innerHTML = commentData
    .map(
      (comment) => `
      <li class="modal-comment"><span class="fw-bold">${comment.creation_date} ${comment.username}:</span> ${comment.comment}</li>
    `
    )
    .join('');
};

// Event listener for the comment form submission
const formElement = document.querySelector('#comment-form');
formElement.addEventListener('submit', async (event) => {
  event.preventDefault();
  const ID = formElement.getAttribute('data-item');
  const name = formElement.querySelector('#name').value;
  const comment = formElement.querySelector('#comment').value;

  if (name !== '' && comment !== '') {
    await setComment(APPID, ID, name, comment);
    await loadComments(ID);
    formElement.reset();
  }
});

// Function to display the modal with image details and comments
const displayModal = async (cardID) => {
  const modalElement = document.querySelector('#modal');
  const modalBackground = document.querySelector('#modal-background');
  const modalInformation = document.querySelector('#modal-information');
  const modalComments = document.querySelector('#modal-comments');
  const modalClose = document.querySelector('#modal-close');

  // Get the Image Information (Details)
  const imageData = await getImageByID(cardID);
  const pageLink = imageData.download_url;

  // Display the Modal
  document.body.style.overflow = 'hidden';
  modalElement.style.display = 'block';
  modalBackground.classList.add('active');

  // Functionality to close the Modal Window
  modalClose.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    modalBackground.classList.remove('active');
    modalInformation.innerHTML = '';
    modalComments.innerHTML = '';
  });

  // Display the Information (Details)
  modalInformation.innerHTML = `
    <img
      loading="lazy"
      id="modal-image"
      src="${pageLink}"
      alt="Preview Image - ${imageData.author}"
      class="modal-image"
    />
    <p class="modal-title">${imageData.author}</p>
    <ul class="modal-list">
      <li class="modal-item"><span class="fw-bold">ID:</span> ${imageData.id}</li>
      <li class="modal-item active">
        <a href="${pageLink}" id="page" target="_blank">
          <span class="fw-bold">Page:</span> Download
        </a>
      </li>
      <li class="modal-item"><span class="fw-bold">Width:</span> ${imageData.width}px</li>
      <li class="modal-item">
        <span class="fw-bold">Height:</span> ${imageData.height}px
      </li>
    </ul>
  `;

  // Function to get the Comments from a specific Item (Card)
  await loadComments(cardID);
  formElement.setAttribute('data-item', cardID);
};

// Get all images (cards) and display them on the page
const cards = await getImages();
const cardsCon = document.querySelector('.cards');
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

  /* const icon = document.createElement('i');
  likes.appendChild(icon);
  icon.classList.add('fa-solid', 'fa-heart'); */

  const likesCount = document.createElement('p');
  likes.appendChild(likesCount);
  likesCount.classList.add('likes-count');
  likesCount.getAttribute('id', 'likes-count');
  likesCount.innerHTML = '1';

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

// Function to load and return likes data
const loadLikes = async () => getLikes(APPID);

// Function to display the number of likes for each card
const displayLikes = async () => {
  const cardsArray = Array.from(document.querySelectorAll('.card'));
  countCards(cardsArray);
  const likesArray = await loadLikes(); // Load likes only once
  cardsArray.forEach((card) => {
    const likesObject = likesArray.find((element) => element.item_id === card.id);
    if (likesObject) {
      const likesCount = card.querySelector('.likes-count');
      likesCount.innerHTML = `${likesObject.likes}`;
    }
  });
};

// Initial display of likes
displayLikes();
