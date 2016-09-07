var React = require('react');
// Import Question component 
import Question from '../../components/Question/Question.js';

// TODO: Correctly push data to Firebase 
var index = 0;
var QuizBuilder = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function () {
	    return { questions: [] };
	},
	renderQuestion: function () {
		// Renders a new Question component 
	    var questions = this.state.questions;
	    questions.push(<Question key={index} />);
	    index++;
	    this.setState({questions: questions});
	},
	onSubmit: function (event) {
		// TODO: Firebase code here
	},
	componentDidMount: function () {
		// Renders one Question component on initial page load. 
		this.renderQuestion();
	},
	render: function() {
	    return (
	        <form className="quiz-builder container" onSubmit={this.sendQuizData} style={{padding: 40, width: 700}}>
	        	<div className="form-group">
	        	{this.state.questions}
	            </div>
	            <button className="btn btn-primary" type="button" onClick={this.renderQuestion} style={{marginRight: 20}}>Add a question</button>
	            <button className="btn btn-primary" type="submit">Create Quiz</button>
	        </form>
	    );
	}
});

module.exports = QuizBuilder;