
module.exports = ({
  idList, keyWord, out, key, token,
}) => {
  const service = require('../service')({ token, key });
  const gitParser = require('./gitParser');
  const commentParser = require('./commentParser');

  const latest = gitParser({ keyWord, out });
  latest.forEach((task) => {
    const { name, due } = commentParser({ keyWord, task });
    service.createCard({ name, due, idList });
  });
};
