import React, { Component } from 'react';
import LocationWidget from '../components/LocationWidget';

class LocationWidgetContainer extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    };
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
  }
  handleSubmitLocation(e) {
    e.preventDefault();
    this.context.router.push(`/forecast/${this.state.location}`);
  }
  handleUpdateLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }
  render() {
    return (
      <LocationWidget
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
        location={this.state.location}
      />
    );
  }
}

LocationWidgetContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default LocationWidgetContainer;
