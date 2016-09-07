var React = require('react');
// Import <ArticleCard/> component
import ArticleCard from '../ArticleCard/ArticleCard.js';
/* 

TODO: 

1. Filter this.state.data to render articles with most timesPassed 
2. Figure out how to render tags from when using map

*/

// Article List
// <ArticleList />
// Loads up article data from Firebase and renders it
var ArticleList = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function () {
		// Data retrieved from Firebase will be pushed into this array. 
		return {
			data: []
		}
	},
	componentWillMount: function () {
		// Takes data stored at the /articles node in Firebase and makes it available in this.state.data
  		var ref = firebase.database().ref('articles');
  		this.bindAsArray(ref, "data");
 	},
	render: function () {
		// Map over this.state.data and return <ArticleCard /> component
		var articleNodes = this.state.data.map(function(article, i) {
			return (
				<ArticleCard 
					title={article.title}
					description={article.description}
					author={article.authorName} 
					photoURL={article.authorImage}
					key={i} />
				);
			});
		
		return (
			<div className="article-list">
				{articleNodes}
			</div>
		);
	}
});

module.exports = ArticleList;