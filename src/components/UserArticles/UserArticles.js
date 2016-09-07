var React = require('react');

// User Articles component 
// <UserArticles/>
// Displays an array of <ArticleCard/> components for quizzes the user has created.
var UserArticles = React.createClass({
	getInitialState: function () {
		// If a user creates a quiz, the <ArticleCard/> component for that quiz will be added to this array. 
		return {
			articles: []
		};
	},
	render: function () {
		return (
			<div className="user-articles">
				
			</div>
		);
	}
});

module.exports = UserArticles;