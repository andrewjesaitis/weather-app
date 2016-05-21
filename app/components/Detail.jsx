var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles/styles');
var utils = require('../helpers/utils');

function Detail(props) {
  if (props.isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4 text-center">
          <i className={props.iconClass}></i>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 text-center lead text-capitalize">
            {props.weatherDescription}
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-thermometer"></i> Temperatue</div>
          <div className="col-sm-2">{props.temperature}</div>
        </div>
        <div className="row">
          <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-barometer"></i> Pressure</div>
          <div className="col-sm-2">{props.pressure} mb</div>
        </div>
        <div className="row">
          <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-humidity"></i> Humidity</div>
          <div className="col-sm-2">{props.humidity}%</div>
        </div>
        <div className="row">
          <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-sunrise"></i> Sunrise</div>
          <div className="col-sm-2">{props.sunrise}</div>
        </div>
        <div className="row">
          <div className="col-sm-1 col-sm-offset-5"><i className="wi wi-sunset"></i> Sunset</div>
          <div className="col-sm-2">{props.sunset}</div>
        </div>
    </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  iconClass: PropTypes.string.isRequired,
};

module.exports = Detail;
