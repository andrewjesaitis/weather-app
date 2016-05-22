var bgImg = require('../images/background.svg');

var styles = {
  mainComponent: {
    backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
    minHeight: '100%',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    position: 'relative',
  },
  vcenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  detailLink: {
    color: 'inherit',
  },
  currentIcon: {
    fontSize: '2em',
  },
};


module.exports = styles;
