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

module.exports = {
  getAppID,
};
