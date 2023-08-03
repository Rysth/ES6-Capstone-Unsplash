const cards = [
  {
    title: 'title 1'
  },
  {
    title: 'title 2'
  },
  {
    title: 'title 3'
  },
  {
    title: 'title 4'
  },
  {
    title: 'title 5'
  },
  {
    title: 'title 6'
  },
];

const cardsCon = document.querySelector('.cards');

cards.forEach((card) => {
  const cardElement = document.createElement('div');
  cardsCon.appendChild(cardElement);
  cardElement.classList.add('card');
  cardElement.getAttribute('id', 'card');

  const img = document.createElement('img');
  cardElement.appendChild(img);
  img.classList.add('card-img');
  img.getAttribute('id', 'card-img');

  const smallCont = document.createElement('div');
  cardElement.appendChild(smallCont);
  smallCont.classList.add('small-cont');
  smallCont.getAttribute('id', 'small-cont');

  const h3 = document.createElement('h3');
  smallCont.appendChild(h3);
  h3.innerHTML = card.title;

  const likes = document.createElement('div');
  smallCont.appendChild(likes);
  likes.classList.add('likes');
  likes.getAttribute('id', 'likes');

  const icon = document.createElement('i');
  likes.appendChild(icon);
  icon.classList.add('icon');
  icon.innerHTML = '()'

  const likesCount = document.createElement('p');
  likes.appendChild(likesCount);
  likesCount.classList.add('likes-count');
  likesCount.getAttribute('id', 'likes-count');
  likesCount.innerHTML = '5 likes'

  const btns = document.createElement('div');
  cardElement.appendChild(btns);
  btns.classList.add('buttons');
  smallCont.getAttribute('id', 'buttons');

  const commentBtn = document.createElement('button');
  btns.appendChild(commentBtn);
  commentBtn.classList.add('card-btn');
  commentBtn.getAttribute('id', 'comment');
  commentBtn.innerHTML = 'Comments';

  const reserveBtn = document.createElement('button');
  btns.appendChild(reserveBtn);
  reserveBtn.classList.add('card-btn');
  reserveBtn.getAttribute('id', 'reservation');
  reserveBtn.innerHTML = 'Reservations';
});