module.exports = ({ out, keyWord }) => out.split('\n').filter((diff) => diff.indexOf(keyWord) !== -1
      && diff.indexOf('+') !== -1 && diff.indexOf('+') === 0);
