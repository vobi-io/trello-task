
module.exports = ({ reqBody, keyWord }) => {
  const { exec } = require('child_process');


  const service = require('./service')(reqBody);

  exec('git rev-parse `git branch -r --sort=committerdate | tail -1`', (err1, remoteBranch) => {
    if (err1) return;
    exec('git rev-parse HEAD', (err2, localBranch) => {
      if (err2) return;

      exec(`git diff ${remoteBranch.replace('\n', '')} ${localBranch.replace('\n', '')}`, (error, out) => {
        if (error) return;

        const latest = out.split('\n').filter((diff) => diff.indexOf(keyWord) !== -1
      && diff.indexOf('+') !== -1 && diff.indexOf('+') === 0);
        latest.forEach((task) => {
          const description = task.split(`${keyWord} `).reverse()[0];
          service.createCard({ name: description });
        });
      });
    });
  });
};
