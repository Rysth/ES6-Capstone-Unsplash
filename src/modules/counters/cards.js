const countCards = (information) => {
  if (information && typeof information === 'object') {
    const textComment = document.querySelector('#page-title');
    textComment.innerHTML = `Cards (${information.length})`;
  }

  return 'Must be an Array';
};

module.exports = {
  countCards,
};
