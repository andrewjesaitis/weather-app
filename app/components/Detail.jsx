var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles/styles');

function Detail(props) {
  if (props.isLoading === true) {
    return (
      <Loading />
    );
  }

  return (
    <div style={styles.verticalCenter}>
      <div className="row">
        <h3>Weather!!!</h3>
      </div>
    </div>
  );
}

Detail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

module.exports = Detail;
