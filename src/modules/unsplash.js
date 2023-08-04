const API = 'https://picsum.photos';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getImages = () => fetch(`${API}/v2/list?page=${getRandomInt(20)}&limit=9`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch images.');
    }
    return response.json();
  })
  .catch(() => 'Nothing found');

const getImageByID = (imageID) => fetch(`${API}/id/${imageID}/info`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch images by ID.');
    }
    return response.json();
  })
  .catch(() => 'Nothing found');

module.exports = {
  getImageByID,
  getImages,
};
