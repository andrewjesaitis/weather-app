var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');

function ForecastDay(props) {
  return (
    <div className={props.containerClass} onClick={props.handleClick} style={styles.forcastDay}>
      <div><i className={props.iconClass}></i></div>
      <br />
      <h4>{props.caption}</h4>
    </div>
  );
}

ForecastDay.propTypes = {
  containerClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

module.exports = ForecastDay;
