var React = require('react');
// Import the <ArticleList /> component
import ArticleList from '../ArticleList/ArticleList.js';

// HomeContainer 
// <HomeContainerComponent />
// Houses the ArticleList component which renders the data input from the <ArticleInfoForm /> component.
var HomeContainer = React.createClass({
	render: function() {
		// Home styles
		var styles = {
			margin: 20,
			padding: 20
		}

		return (
			<div className="home-container container" style={styles}>
				<h1>Home Page</h1>
				<ArticleList />
			</div>
		);
	}
});


module.exports = HomeContainer;