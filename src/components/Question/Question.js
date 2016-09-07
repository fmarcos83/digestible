var React = require('react');
// Import Answer component 
import Answer from '../../components/Answer/Answer.js';

// Question Component 
// <Question />
// Includes an input for the question text and renders two <Answer /> components as well. 

// Use index as key
var index = 0;
var Question = React.createClass({
	getInitialState: function() {
		// Set this.state.answers to empty array. This will hold answer options.
		// this.state.questionText set to an empty string.  
		return {
			answers: [],
			questionText: ""
		}
	},
	handleQuestionTextChange: function(event) {
		// Update this.state.questionText on user input.
		this.setState({questionText: event.target.value})
	},
	addAnswer: function() {
		// Push Answer components to this.state.answers
		var answers = this.state.answers;
		answers.push(<Answer key={index}/>);
		this.setState({ answers: answers });
		index++;
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