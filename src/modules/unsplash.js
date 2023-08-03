const API = 'https://picsum.photos/';

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
