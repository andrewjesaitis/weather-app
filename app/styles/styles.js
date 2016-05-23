var bgImg = require('../images/gplaypattern.png');

var styles = {
  mainComponent: {
    backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
    backgroundRepeat: 'repeat',
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
  forcastDay: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  hcenter: {
    display: 'flex',
    justifyContent: 'center',
  },
};


module.exports = styles;
