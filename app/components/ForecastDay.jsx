var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles/styles');

function ForecastDay(props) {
  return (
    <div className={props.containerClass}>
      <Link to="/detail/Bozeman,MT" style={styles.detailLink}>
        <div><i className={props.iconClass}></i></div>
        <h4>{props.dateString}</h4>
      </Link>
    </div>
  );
}

module.exports = ForecastDay;
