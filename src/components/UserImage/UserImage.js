var React = require('react');
import ProfileHeader from '../../components/UserImage/UserImage.js';

// User Image component
// <UserImage />
// Shows a logged in users image 

var UserImage = React.createClass({
	render: function () {
	  return (
	    <img src={this.props.photoURL} alt="user" />
	  );
	}
});

module.exports = UserImage;