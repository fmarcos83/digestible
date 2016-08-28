var React = require('react');

// ArticleList
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
	render: function() {
		return (
			<div className="article-list">
				<h1>Article List</h1>
				{/* Use map to iterate over this.state.data and render <ArticleCard /> components */}
			</div>
		);
	}
});


module.exports = ArticleList;