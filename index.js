
module.exports = ({ reqBody, keyWord }) => {
  const { exec } = require('child_process');

  const service = require('./service')(reqBody);
  const gitParser = require('./helpers/gitParser');
  const commentParser = require('./helpers/commentParser');

  exec('git rev-parse `git branch -r --sort=committerdate | tail -1`', (err1, remoteBranch) => {
    if (err1) return;
    exec('git rev-parse HEAD', (err2, localBranch) => {
      if (err2) return;

      exec(`git diff ${remoteBranch.replace('\n', '')} ${localBranch.replace('\n', '')}`, (error, out) => {
        if (error) return;

        const latest = gitParser({ keyWord, out });
        latest.forEach((task) => {
          const { name, due } = commentParser({ keyWord, task });
          service.createCard({ name, due });
        });
      });
    });
  });
};
