var React = require('react');
var PropTypes = React.PropTypes;

function LocationWidget(props) {
  return (
    <form className="form-inline" onSubmit={props.onSubmitLocation}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          value={props.location}
          onChange={props.onUpdateLocation} />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
}

LocationWidget.PropTypes = {
  location: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
};

module.exports = LocationWidget;
