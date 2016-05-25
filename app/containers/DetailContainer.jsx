import React, { Component, PropTypes } from 'react';
import Detail from '../components/Detail';
import utils from '../helpers/utils';

class DetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      weatherCode: null,
      day: {},
      title: '',
    };
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillMount() {
    let title;
    const index = this.props.location.state.index;
    if (index >= 0) {
      title = `Forcast for ${utils.formatDateString(this.props.location.state.day.dt)}`;
    } else {
      title = 'Current Conditions';
    }
    this.setState({ title });
  }
  handleClose(e) {
    e.preventDefault();
    this.context.router.push(`/forecast/${this.props.location.state.city}`);
  }
  render() {
    return (
      <div>
        <Detail
          isLoading={this.state.isLoading}
          handleClose={this.handleClose}
          title={this.state.title}
          iconClass={utils.getWeatherIconClass(this.props.location.state.day.weatherCode)}
          day={this.props.location.state.day}
        />
      </div>
    );
  }
}

DetailContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

DetailContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default DetailContainer;
