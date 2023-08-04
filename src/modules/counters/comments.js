const countComments = (information) => {
  if (information && typeof information === 'object') {
    const textComment = document.querySelector('#text-comment');
    textComment.innerHTML = `Comments(${information.length})`;
  }

  return 'Must be an Array';
};

module.exports = {
  countComments,
};
