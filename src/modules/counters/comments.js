const countComments = (information) => {
  if (information) {
    const textComment = document.querySelector('#text-comment');
    textComment.innerHTML = `Comments(${information.length})`;
  }
};

module.exports = {
  countComments,
};
