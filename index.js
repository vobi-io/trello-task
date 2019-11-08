
module.exports = ({ lists, token, key }) => {
  const { exec } = require('child_process');
  const createCard = require('./helpers/createCard');

  exec('git rev-parse `git branch -r --sort=committerdate | tail -1`', (err1, remoteBranch) => {
    if (err1) return;
    exec('git rev-parse HEAD', (err2, localBranch) => {
      if (err2) return;

      exec(`git diff ${remoteBranch.replace('\n', '')} ${localBranch.replace('\n', '')}`, (error, out) => {
        if (error) return;

        lists.map(({ keyWord, idList }) => createCard({
          keyWord, out, token, key, idList,
        }));
      });
    });
  });
};
