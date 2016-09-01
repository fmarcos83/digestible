var React = require('react');
// Import React Router
import { Link } from 'react-router';

/* 

TODO: 

1. Get this.state.user to change so I can update components. 
2. Render <NavBar /> to show dropdown with username 

*/

var App = React.createClass({
  getInitialState: function () {
    return {
      user : null
    }
  },
  componentDidMount: function () {
    // Checks to see if a user is signed in and gets user info. 
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // If user is signed in, get the user's info. 
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
        // No user is signed in.
      }
    });
  },
  toggleSignIn: function () {
    if (!firebase.auth().currentUser) {
      // Create an instance of the Google provider object
      var provider = new firebase.auth.GoogleAuthProvider();
      // Sign in with popup.
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        // Get signed-in user info 
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      // Sign user out
      firebase.auth().signOut();
    }
  },
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
              <a className="nav-link" href="#" onClick={this.toggleSignIn}>Sign In / Sign Up</a>
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
