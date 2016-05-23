var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles/styles');

function ForecastDay(props) {
  return (
    <div className={props.containerClass} onClick={props.handleClick} style={styles.forcastDay}>
        <div><i className={props.iconClass}></i></div>
        <h4>{props.dateString}</h4>
    </div>
  );
}

module.exports = ForecastDay;
