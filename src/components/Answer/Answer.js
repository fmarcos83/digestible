var React = require('react');

var Answer = React.createClass({
	handleAnswerTextChange: function(event) {
		this.props.answerUpdate(this.props.id, {id: this.props.id, text: event.target.value, questionId:this.props.questionId});
	},
	selectAnswer: function(event) {
		this.props.answerUpdate(this.props.id, {id: this.props.id, answered: event.target.checked, questionId: this.props.questionId});
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