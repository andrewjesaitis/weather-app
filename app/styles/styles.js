var bgImg = require('../images/background.svg');

var styles = {
  bg: {
    backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
    minHeight: '100%',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
  },
};


module.exports = styles;
