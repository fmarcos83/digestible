var React = require('react');

// ArticleInfoContainer
// <ArticleInfoContainer />
// Acts as the wrapper for <ArticleInfoForm /> component
var ArticleInfoContainer = React.createClass({
	render: function () {

		var styles = {
			margin: 20,
			padding: 20
		}

		return (
			<div className="article-info-container" style={styles}>
				<ArticleInfoForm />
			</div>
		);
	}
});

// ArticleInfoForm
// <ArticleInfoForm />
// Allows a user to input info about their article. 
var ArticleInfoForm = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function () {
		// Sets initial state for title, link, and topic inputs to empty strings
		return {
			title: '',
			link: '',
			topics: ''
		}
	},
	onTitleChange: function (e) {
		// Updates the state as the user types
		e.preventDefault();
		this.setState({
			title: e.target.value
		});
	},
	onLinkChange: function (e) {
		e.preventDefault();
		this.setState({
			link: e.target.value
		});
	},
	onTopicChange: function (e) {
		e.preventDefault();
		this.setState({
			topics: e.target.value
		});
	},
	handleSubmit: function (e) {
		// Submits data to Firebase and resets the state 
		e.preventDefault();
		this.firebaseRef = firebase.database().ref('articles');
		this.firebaseRef.push({
			title: this.state.title,
			link: this.state.link,
			topics: this.state.topics
		});
		this.setState({
			title: '',
			link: '',
			topics: ''
		});
	},
	render: function () {
		// Form styles
		var formStyles = {
			marginTop: 40,
			width: 600,
			padding: 30,
			borderStyle: 'solid',
			borderWidth: 2,
			borderColor: '#ECECEC',
		}

		return (
			<div className="article-info-form">
				<form style={formStyles} onSubmit={this.handleSubmit}>
					<label htmlFor="exampleInputTitle1">What are you creating your quiz for?</label>
					<div className="btn-group" role="group" aria-label="Basic example" ref="article-type">
  						<button type="button" className="btn btn-secondary" value="article">Online article</button>
  						<button type="button" className="btn btn-secondary" value="book">Chapter in a book</button>
  						<button type="button" className="btn btn-secondary" value="video">Video</button>
  						<button type="button" className="btn btn-secondary" value="podcast">Podcast</button>
					</div>
					<div className="form-group" style={{marginTop: 20}}>
    					<label htmlFor="exampleInputTitle1">Title</label>
    					<input type="text" className="form-control" id="exampleInputTitle1" aria-describedby="titleHelp" placeholder="" value={this.state.title} onChange={this.onTitleChange}/>
    					<small id="titleHelp" className="form-text text-muted">Enter the title of your </small>
 					 </div>
 					 <div className="form-group" style={{marginTop: 20}}>
    					<label htmlFor="exampleInputLink1">Link</label>
    					<input type="url" className="form-control" id="exampleInputLink1" aria-describedby="titleHelp" placeholder="" value={this.state.link} onChange={this.onLinkChange}/>
    					<small id="linkHelp" className="form-text text-muted">Enter the link to your</small>
 					 </div>
 					 <div className="form-group" style={{marginTop: 20}}>
    					<label htmlFor="exampleInputTopics1">Topics</label>
    					<input type="text" className="form-control" id="exampleInputTopic1" aria-describedby="tagHelp" placeholder="" value={this.state.topics} onChange={this.onTopicChange}/>
    					<small id="topicHelp" className="form-text text-muted">What topics are covered in your </small>
 					 </div>
 					 <button type="submit" className="btn btn-primary">Build Your Quiz</button>
 				</form>
			</div>
		);
	}
});

module.exports = ArticleInfoContainer;