var React = require('react');
// Import <ProfileHeader/>, <CompletedArticles/>, and <UserArticles/> components
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.js';
import CompletedArticles from '../../components/CompletedArticles/CompletedArticles.js';
import UserArticles from '../../components/UserArticles/UserArticles.js';

// Profile Component
// <Profile/>
// Acts as the container for the <ProfileHeader/> and <ProfileFeed/> components. 
var Profile = React.createClass({
	render: function () {
		return (
			<div className="profile-container">
				<ProfileHeader/>
				<CompletedArticles/>
				<UserArticles/>
			</div>
		);
	}
});

module.exports = Profile;