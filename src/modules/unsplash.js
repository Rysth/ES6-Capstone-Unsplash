const API = 'https://picsum.photos';

const getImages = async () => {
  const response = await fetch(`${API}/v2/list?page=2&limit=6`, {
    method: 'GET',
  });

  const data = await response.json();

  if (data) return data;

  return 'Nothing found';
};

const getImageByID = async (imageID) => {
  const response = await fetch(`${API}/seed/${imageID}/info`, {
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
};
