module.exports = ({ task, keyWord }) => {
  const commentArray = task.split(`${keyWord} `).reverse()[0].split('@due');

  return {
    due: commentArray[1],
    name: commentArray[0],
  };
};
