var bgImg = require('../images/background.svg');

var styles = {
  bg: {
    backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
    minHeight: '100%',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
  },
  verticalCenter: {
    minHeight: '90%',
    display: 'flex',
    alignItems: 'center',
  },
  loading: {
    minHeight: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};


module.exports = styles;
