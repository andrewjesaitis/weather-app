var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles/styles');
var utils = require('../helpers/utils');

function Temperatue(props) {
  return (
    <div>
      <dt><i className="wi wi-thermometer"></i> Temperatue</dt>
      <dd>
        {props.temperature.length === 1 ?
         `${props.temperature} \u{2109}`:
         `${props.temperature[0]}  \u{2109} / ${props.temperature[1]}  \u{2109}`}
      </dd>
    </div>
  );
}

function Sunrise(props) {
  if (props.time) {
    return (
      <div>
        <dt><i className="wi wi-sunrise"></i> Sunrise</dt>
        <dd>{props.time}</dd>
      </div>
    );
  }
  return null;
}

function Sunset(props) {
  if (props.time) {
    return (
      <div>
        <dt><i className="wi wi-sunset"></i> Sunset</dt>
        <dd>{props.time}</dd>
      </div>
    );
  }
  return null;
}

function Detail(props) {
  if (props.isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-1 col-sm-offset-7">
          <button type="button" className="close" onClick={props.handleClose} aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2>{props.title}</h2>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center" style={styles.currentIcon}>
          <i className={props.iconClass}></i>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center lead text-capitalize">
          {props.day.weatherDescription}
        </div>
      </div>
      <div style={styles.hcenter}>
      <dl className="dl-horizontal">
        <Temperatue temperature={props.day.temperature} />
        <dt> <i className="wi wi-barometer"></i> Pressure</dt>
        <dd>{props.day.pressure} mb</dd>
        <dt><i className="wi wi-humidity"></i> Humidity</dt>
        <dd>{props.day.humidity}%</dd>
        <Sunrise time={props.day.sunrise || 0} />
        <Sunset time={props.day.sunset || 0} />
      </dl>
      </div>
    </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  iconClass: PropTypes.string.isRequired,
};

module.exports = Detail;
