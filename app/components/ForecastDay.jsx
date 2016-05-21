var React = require('react');

function ForecastDay(props) {
  return (
    <div className={props.containerClass}>
      <div><i className={props.iconClass}></i></div>
      <h4>{props.dateString}</h4>
    </div>
  );
}

module.exports = ForecastDay;
