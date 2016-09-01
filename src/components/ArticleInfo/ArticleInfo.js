var React = require('react');
// Require Tag plugin
import { WithContext as ReactTags } from 'react-tag-input';

// TODO: Figure out how to use buttons as input

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
			description: '',
			link: '',
			tags: []
		}
	},
	onTitleChange: function (e) {
		// Updates the state as the user types
		e.preventDefault();
		this.setState({
			title: e.target.value
		});
	},
	onDescriptionChange: function (e) {
		// Updates the state as the user types
		e.preventDefault();
		this.setState({
			description: e.target.value
		});
	},
	onLinkChange: function (e) {
		e.preventDefault();
		this.setState({
			link: e.target.value
		});
	},
	handleDelete: function (i) {
		// Deletes tags from this.state.tags
		var tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({
			tags: tags
		});
	},
	handleAddition: function (tag) {
		// Adds tags to this.state.tags
		var tags = this.state.tags;
		tags.push({
			text: tag
		});
		this.setState({
			tags: tags
		});
	},
	handleSubmit: function (e) {
		// Get access to logged in user info 
		var user = firebase.auth().currentUser;
		// Submits data to Firebase and resets the state 
		e.preventDefault();
		this.firebaseRef = firebase.database().ref('articles');
		this.firebaseRef.push({
			title: this.state.title,
			description: this.state.description,
			link: this.state.link,
			tags: this.state.tags,
			uid: user.uid,
			author: user.displayName,
			authorImage: user.photoURL
		});
		this.setState({
			title: '',
			description: '',
			link: '',
			tags: []
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

		var tags = this.state.tags;

		return (
			<div className="article-info-form">
				<form style={formStyles} onSubmit={this.handleSubmit}>
					<label htmlFor="exampleInputTitle1">What are you creating your quiz for?</label>
					<div className="btn-group" data-toggle="buttons" ref="type">
  						<label className="btn btn-secondary">
    						<input type="checkbox" autoComplete="off"/> An online article
  						</label>
  						<label className="btn btn-secondary">
    						<input type="checkbox" autoComplete="off"/> A chapter in a book
  						</label>
  						<label className="btn btn-secondary">
    						<input type="checkbox" autoComplete="off"/> A video
  						</label>
  						<label className="btn btn-secondary">
    						<input type="checkbox" autoComplete="off"/> A podcast
  						</label>
					</div>
					<div className="form-group" style={{marginTop: 20}}>
    					<label htmlFor="exampleInputTitle1">Title</label>
    					<input type="text" className="form-control" id="exampleInputTitle1" aria-describedby="titleHelp" placeholder="" value={this.state.title} onChange={this.onTitleChange}/>
    					<small id="titleHelp" className="form-text text-muted">Enter the title of your </small>
 					</div>
 					<div className="form-group" style={{marginTop: 20}}>
    					<label htmlFor="exampleTextarea">Short description (optional)</label>
    					<textarea className="form-control" id="exampleTextarea" rows="3" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
  					</div>
 					 <div className="form-group" style={{marginTop: 20}}>
    					<label htmlFor="exampleInputLink1">Link</label>
    					<input type="url" className="form-control" id="exampleInputLink1" aria-describedby="titleHelp" placeholder="" value={this.state.link} onChange={this.onLinkChange}/>
    					<small id="linkHelp" className="form-text text-muted">Enter the link to your</small>
 					 </div>
 					 <div style={{marginTop: 20}}>
    					<label htmlFor="exampleInputTopics1">Tags</label>
    					<ReactTags tags={tags}
                    		handleDelete={this.handleDelete}
                    		handleAddition={this.handleAddition} />
                    	<small id="tagHelp" className="form-text text-muted">What topics will your reader learn about?</small>
 					 </div>
 					 <button type="submit" className="btn btn-primary" style={{marginTop: 20}}>Build Your Quiz</button>
 				</form>
			</div>
		);
	}
});

module.exports = ArticleInfoContainer;