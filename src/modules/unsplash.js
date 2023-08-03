const API = 'https://picsum.photos';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getImages = () => fetch(`${API}/v2/list?page=${getRandomInt(20)}&limit=9`)
  .then((response) => response.json())
  .catch(() => 'Nothing found');

const getImageByID = (imageID) => fetch(`${API}/id/${imageID}/info`)
  .then((response) => response.json())
  .catch(() => 'Nothing found');

module.exports = {
  getImageByID,
  getImages,
};
