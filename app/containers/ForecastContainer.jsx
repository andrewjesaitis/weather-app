import React, { PropTypes, Component } from 'react';
import Forecast from '../components/Forecast';
import api from '../helpers/api';
import utils from '../helpers/utils';
import axios from 'axios';

class ForecastContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      forecast: [],
      current: {},
    };
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.city);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ isLoading: true });
    this.makeRequest(newProps.routeParams.city);
  }
  makeRequest(city) {
    axios.all([api.getCurrentWeather(city),
               api.getForecastWeather(city, 5)])
         .then(axios.spread((currentData, forecastData) => {
           this.setState({
             current: utils.normalizeCurrentData(currentData),
             forecast: utils.normalizeForecastData(forecastData),
             isLoading: false,
           });
         }));
  }
  render() {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          current={this.state.current}
          forecast={this.state.forecast}
          city={this.props.routeParams.city}
        />
      </div>
    );
  }
}

ForecastContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
};

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default ForecastContainer;
