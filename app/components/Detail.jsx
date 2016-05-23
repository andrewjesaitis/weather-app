var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles/styles');

function Temperature(props) {
  return (
    <div>
      <dt><i className="wi wi-thermometer"></i> Temperatue</dt>
      <dd>
        {props.temperature.length === 1 ?
         `${props.temperature} \u{2109}` :
         `Low: ${props.temperature[0]}  \u{2109} / High: ${props.temperature[1]}  \u{2109}`}
      </dd>
    </div>
  );
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
};

function Pressure(props) {
  return (
    <div>
      <dt> <i className="wi wi-barometer"></i> Pressure</dt>
      <dd>{props.pressure} mb</dd>
    </div>
  );
}

Pressure.propTypes = {
  pressure: PropTypes.number.isRequired,
};

function Humidity(props) {
  return (
    <div>
      <dt><i className="wi wi-humidity"></i> Humidity</dt>
      <dd>{props.humidity}%</dd>
    </div>
  );
}

Humidity.propTypes = {
  humidity: PropTypes.number.isRequired,
};

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

Sunrise.propTypes = {
  time: PropTypes.string,
};

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

Sunset.propTypes = {
  time: PropTypes.string,
};

function Detail(props) {
  if (props.isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4 text-center">
          <h2>{props.title}</h2>
        </div>
        <div className="col-xs-1">
          <button type="button" className="close" onClick={props.handleClose} aria-label="Close">
            <span style={styles.currentIcon} aria-hidden="true">&times;</span>
          </button>
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
          <Temperature temperature={props.day.temperature} />
          <Pressure pressure={props.day.pressure} />
          <Humidity humidity={props.day.humidity} />
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
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  day: PropTypes.object.isRequired,
};

module.exports = Detail;
