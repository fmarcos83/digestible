var React = require('react');
// Import Question component 
import Question from '../../behaviour/Question/Question.js';




// TODO: Correctly push data to Firebase 
var index = 0;
var QuizBuilder = React.createClass({
	getInitialState: function () {
	    return { questions: [] };
	},
	renderQuestion: function () {
		// Renders a new Question component 
	    var questions = this.state.questions;
	    questions.push(<Question id={index} key={index} />);
		index++
	    this.setState({questions: questions});
	},
	onSubmit: function (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.quizCreate(this.props.data);
	},
	componentDidMount: function () {
		// Renders one Question component on initial page load. 
		this.renderQuestion();
	},
	render: function() {
	    return (
            <form className="quiz-builder container" style={{padding: 40, width: 700}}>
                <div className="form-group">
                {this.state.questions}
                </div>
                <button className="btn btn-primary" type="button" onClick={this.renderQuestion} style={{marginRight: 20}}>Add a question</button>
                <button className="btn btn-primary" type="submit" onClick={this.onSubmit}>Create Quiz</button>
            </form>
	    );
	}
});

module.exports = QuizBuilder;