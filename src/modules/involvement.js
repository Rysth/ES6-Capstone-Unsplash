const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const getAppID = async () => {
  const response = await fetch(`${API}/apps/`, {
    method: 'POST',
    body: {},
  });
  return response.text();
};

const getComments = async (APPID, itemID = '') => {
  const response = await fetch(`${API}/apps/${APPID}/comments?item_id=${itemID}`, {
    method: 'GET',
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
};

const setComment = async (APPID, ID, username, comment) => {
  const itemObject = {
    item_id: ID, // eslint-disable-line no-console
    username,
    comment,
  };

  const response = await fetch(`${API}/apps/${APPID}/comments`, {
    method: 'POST',
    body: JSON.stringify(itemObject),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.text();
};

module.exports = {
  getAppID,
  getComments,
  setComment,
};
