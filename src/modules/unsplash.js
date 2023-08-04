// Constants
const API = 'https://picsum.photos';

// Utility function to get a random integer
const getRandomInt = (max) => Math.floor(Math.random() * max);

// Function to get a list of random images
const getImages = async () => {
  try {
    const response = await fetch(
      `${API}/v2/list?page=${getRandomInt(5)}&limit=${getRandomInt(10)}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch images.');
    }
    const images = await response.json();
    return images;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error instead of 'Nothing found'.
  }
};

// Function to get an image by its ID
const getImageByID = async (imageID) => {
  try {
    const response = await fetch(`${API}/id/${imageID}/info`);
    if (!response.ok) {
      throw new Error('Failed to fetch image by ID.');
    }
    const image = await response.json();
    return image;
  } catch (error) {
    console.error(error);
    return null; // Return null on error instead of 'Nothing found'.
  }
};

// Export the functions for external use
module.exports = {
  getImages,
  getImageByID,
};
