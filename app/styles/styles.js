const bgImg = require('../images/gplaypattern.png');

export const mainComponent = {
  backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
  backgroundRepeat: 'repeat',
  minHeight: '100%',
  position: 'relative',
};

export const vcenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
};

export const detailLink = {
  color: 'inherit',
};

export const currentIcon = {
  fontSize: '2em',
};

export const forcastDay = {
  marginTop: '10px',
  marginBottom: '10px',
};

export const hcenter = {
  display: 'flex',
  justifyContent: 'center',
};

