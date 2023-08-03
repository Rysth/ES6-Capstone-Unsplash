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
});