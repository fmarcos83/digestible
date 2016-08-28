var React = require('react');
// Import React Router
import { Link } from 'react-router';

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <nav className="navbar navbar-light bg-faded">
          <Link to="/" className="navbar-brand" href="#">Digestible <span className="sr-only">(current)</span></Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/article-info" className="nav-link" href="#">Create Quiz</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" href="#">Sign In / Sign Up</Link>
            </li>
          </ul>
          <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search" style={{marginRight: 15}}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </nav>
        <main  className="app-content">
          {this.props.children}
        </main>
      </div>
    );
  }
});

module.exports = App;
