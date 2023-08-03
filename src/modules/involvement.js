const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const getAppID = async () => {
  const response = await fetch(`${API}/apps/`, {
    method: 'POST',
    body: {},
  });

  const data = await response.text();

  if (data) return data;

  return 'Nothing found';
};

const getComments = async (APPID, itemID = '') => {
  const response = await fetch(`${API}/apps/${APPID}/comments?item_id=${itemID}`, {
    method: 'GET',
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  if (data) return data;

  return 'Nothing found';
};

const setComment = async (APPID, itemID, username, comment) => {
  const itemObject = {
    item_id: itemID,
    username: username,
    comment: comment,
  };

  const response = await fetch(`${API}/apps/${APPID}/comments`, {
    method: 'POST',
    body: JSON.stringify(itemObject),
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
    },
  });

  const data = await response.text();

  if (data) return data;

  return 'Nothing found';
};

module.exports = {
  getAppID,
  getComments,
  setComment,
};
