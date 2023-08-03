const API = 'https://picsum.photos';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getImages = async () => {
  const response = await fetch(`${API}/v2/list?page=${getRandomInt(20)}&limit=9`, {
    method: 'GET',
  });

  const data = await response.json();

  if (data) return data;

  return 'Nothing found';
};

const getImageByID = async (imageID) => {
  const response = await fetch(`${API}/id/${imageID}/info`, {
    method: 'GET',
  });

  const data = await response.json();

  if (data) {
    return data;
  }

  return 'Nothing found';
};

module.exports = {
  getImageByID,
  getImages,
};
