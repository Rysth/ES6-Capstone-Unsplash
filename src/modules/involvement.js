// Constants
const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

// Function to get the Application ID
const getAppID = async () => {
  const response = await fetch(`${API}/apps/`, {
    method: 'POST',
    body: {},
  });
  return response.text();
};

// Function to get comments for a specific item
const getComments = async (APPID, itemID = '') => {
  const response = await fetch(`${API}/apps/${APPID}/comments?item_id=${itemID}`, {
    method: 'GET',
  });

  if (response.ok) {
    return response.json();
  }
  return [];
};

// Function to set a comment for a specific item
const setComment = async (APPID, ID, username, comment) => {
  const itemObject = {
    item_id: ID,
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

// Function to get likes data
const getLikes = async (APPID) => {
  try {
    const response = await fetch(`${API}/apps/${APPID}/likes`, {
      method: 'GET',
    });

    const responseJson = await response.json();
    if (response.ok && responseJson.length > 0) {
      return responseJson;
    }
    return [];
  } catch (error) {
    return []; // Return an empty array or another default value if JSON parsing fails.
  }
};

// Function to set likes for a specific item
const setLikes = async (APPID, ID) => {
  const itemObject = {
    item_id: ID,
  };

  const response = await fetch(`${API}/apps/${APPID}/likes`, {
    method: 'POST',
    body: JSON.stringify(itemObject),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.text();
};

// Export the functions for external use
module.exports = {
  getAppID,
  getComments,
  setComment,
  getLikes,
  setLikes,
};
