var React = require('react');

// Answer Component 
// <Answer />
// Allows user to input possible answers to the <Question /> component 

var Answer = React.createClass({
	getInitialState: function() {
		return {
			answerText: "",
			isRightAnswer: false
		}
	},
	handleAnswerTextChange: function(event) {
		this.setState({answerText: event.target.value})
	},
	selectAnswer: function() {
		// Toggles this.state.isRightAnswer between true and false
		var isRightAnswer = this.state.isRightAnswer;
		this.setState({
			isRightAnswer: !isRightAnswer
		})
	},
	render: function () {
	    return (
	    	<div className="input-group" style={{marginBottom: 20}}>
	    		<input type="text" className="form-control" placeholder="Enter an answer" aria-label="Text input with checkbox" onChange={this.handleAnswerTextChange}/>
	    		<span className="input-group-addon">
	    			<input type="checkbox" aria-label="Checkbox for following text input" onClick={this.selectAnswer} />
	        	</span>
	    	</div>
	   	);
	}
});

module.exports = Answer;