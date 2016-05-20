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
    minHeight: '100vh', /* These two lines are counted as one :-)       */
    display: 'flex',
    alignItems: 'center',
  },
};


module.exports = styles;
