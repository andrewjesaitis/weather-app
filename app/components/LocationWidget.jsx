var React = require('react');

function LocationWidget() {
  return (
    <div className="form-inline">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Location" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </div>
  );
}

module.exports = LocationWidget;
