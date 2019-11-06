
module.exports = ({ reqBody, keyWord }) => {
  const { exec } = require('child_process');


  const service = require('./service')(reqBody);

  exec('git rev-parse HEAD', (err, stdout) => {
    if (err) return;

    exec(`git log -u -1 ${stdout}`, (error, out) => {
      if (error) return;

      const latest = out.split('\n').filter((diff) => diff.indexOf(keyWord) !== -1
      && diff.indexOf('+') !== -1 && diff.indexOf('+') === 0);
      latest.forEach((task) => {
        const description = task.split(`${keyWord} `).reverse()[0];
        service.createCard({ name: description });
      });
    });
  });
};
