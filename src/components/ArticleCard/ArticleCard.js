var React = require('react');

// Article Card 
// <ArticleCard />
// Displays information about the article and author

var ArticleCard = React.createClass({
	render: function () {
		return (
			<div className="card card-block">
				<img className="img-circle" src={this.props.photoURL} alt="user" style={{height: 40, width: 40}}/>
				<p>{this.props.author}</p>
				<h2 className="card-title">{this.props.title}</h2>
				<p>{this.props.description}</p>
				<a href="#" className="card-link">Learn more...</a>
			</div>
		);
	} 
});

module.exports = ArticleCard;