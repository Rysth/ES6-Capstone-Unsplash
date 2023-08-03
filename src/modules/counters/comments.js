const countComments = (information) => {
  if (information) {
    const textComment = document.querySelector('#text-comment');
    textComment.innerHTML = `Comments(${information.length})`;
    return;
  }

  return 0;
};

module.exports = {
  countComments,
};
