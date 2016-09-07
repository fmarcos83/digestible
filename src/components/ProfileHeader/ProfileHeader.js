var React = require('react');
// Import the <UserImage /> component
import UserImage from '../../components/UserImage/UserImage.js';

// Profile Header component 
// <ProfileHeader />

var ProfileHeader = React.createClass({
	render: function () {
		return (
			<div className="jumbotron jumbotron-fluid profile-header">
  				<div className="container">
    				<UserImage/>
    				<h2 className="display-name">{this.props.displayName}</h2>
    				<p className="user-bio">{this.props.userBio}</p>
  				</div>
			</div>
		);
	}
});

module.exports = ProfileHeader;