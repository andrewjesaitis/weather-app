var React = require('react');

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Location" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </nav>
  );
}

var Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return (
      <div classNameName="main-container">
        <Navbar />
       {this.props.children}
      </div>
    );
  },
});

module.exports = Main;

