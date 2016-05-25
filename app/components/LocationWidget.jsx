import React, { PropTypes } from 'react';

function LocationWidget({ location, onSubmitLocation, onUpdateLocation }) {
  return (
    <form className="navbar-form" onSubmit={onSubmitLocation} role="search">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Locattion"
          value={location}
          onChange={onUpdateLocation}
        />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
}

LocationWidget.propTypes = {
  location: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
};

export default LocationWidget;
