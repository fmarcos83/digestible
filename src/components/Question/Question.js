var React = require('react');
// Import Answer component 
import Answer from '../../behaviour/Answer/Answer.js';

// Question Component 
// <Question />
// Includes an input for the question text and renders two <Answer /> components as well. 

// Use index as key
var Question = React.createClass({
	getInitialState: function() {
		// Set this.state.answers to empty array. This will hold answer options.
		// this.state.questionText set to an empty string.  
		return {
			answers: [],
			text: ""
		}
	},
	handleQuestionTextChange: function(event) {
		// Update this.state.questionText on user input.
		this.props.questionUpdate({id: this.props.id, text: event.target.value})
	},
	addAnswer: function() {
		// Push Answer components to this.state.answers
		var answers = this.state.answers;
		answers.push(<Answer key={answers.length} id={answers.length} questionId={this.props.id} />);
		this.setState({ answers: answers });
	},
	componentDidMount: function () {
		// Render two answer inputs initially on page load. 
		this.addAnswer();
		this.addAnswer();
	},
	render: function () {
	    return (
	    	<div className="question">
	        	<input type="text" className="form-control" placeholder="Enter a question" onChange={this.handleQuestionTextChange} style={{marginBottom: 20}}/>
	        	<div className="answers">
	        	{this.state.answers}
	        	</div>
	        	<button type="button" className="btn btn-link" onClick={this.addAnswer} style={{color: 'blue'}}>Add answer</button>
	    	</div>
	    );
	}
});

module.exports = Question;