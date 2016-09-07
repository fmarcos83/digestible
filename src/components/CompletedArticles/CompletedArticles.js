var React = require('react');

// Completed Articles component
// <CompletedArticles/>
// Displays an array of <ArticleCard/> components for quizzes the user has passed.
var CompletedArticles = React.createClass({
	getInitialState: function () {
		// Once a quiz has been completed by a user, the <ArticleCard/> component for that quiz will be added to this array. 
		return {
			articles: []
		};
	},
	render: function () {
		return (
			<div className="completed-articles">
				
			</div>
		);
	}
});

module.exports = CompletedArticles;