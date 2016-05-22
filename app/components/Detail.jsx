var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles/styles');
var utils = require('../helpers/utils');

function Temperatue(props) {
  return (
      <div className="row">
        <div className="col-sm-1 col-sm-offset-5">
          <i className="wi wi-thermometer"></i> Temperatue
        </div>
        <div className="col-sm-2">
          {props.temperature.length === 1 ?
           props.temperature :
           `${props.temperature[0]}  \u{2109} / ${props.temperature[1]}  \u{2109}`}
        </div>
      </div>
  );
}

function Sunrise(props) {
  if (props.time) {
    return (
      <div className="row">
        <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-sunrise"></i> Sunrise</div>
        <div className="col-sm-2">{props.time}</div>
      </div>
    );
  }
  return null;
}

function Sunset(props) {
  if (props.time) {
    return (
      <div className="row">
        <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-sunset"></i> Sunset</div>
        <div className="col-sm-2">{props.time}</div>
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
      <Temperatue temperature={props.day.temperature} />
      <div className="row">
        <div className="col-sm-1 col-sm-offset-5"> <i className="wi wi-barometer"></i> Pressure</div>
        <div className="col-sm-2">{props.day.pressure} mb</div>
      </div>
      <div className="row">
        <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-humidity"></i> Humidity</div>
        <div className="col-sm-2">{props.day.humidity}%</div>
      </div>
      <Sunrise time={props.day.sunrise || 0} />
      <Sunset time={props.day.sunset || 0} />
    </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  iconClass: PropTypes.string.isRequired,
};

module.exports = Detail;
