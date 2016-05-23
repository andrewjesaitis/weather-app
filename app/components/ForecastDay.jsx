var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');

function ForecastDay(props) {
  return (
    <div className={props.containerClass} onClick={props.handleClick} style={styles.forcastDay}>
      <div><i className={props.iconClass}></i></div>
      <h4>{props.dateString}</h4>
    </div>
  );
}

ForecastDay.propTypes = {
  containerClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  dateString: PropTypes.string.isRequired,
};

module.exports = ForecastDay;
