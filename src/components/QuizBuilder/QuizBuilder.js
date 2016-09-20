var React = require('react');
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import quizApp from "../../data/quiz/reducers";
// Import Question component 
import Question from '../../behaviour/Question/Question.js';

let store = createStore(quizApp)

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
	    questions.push(<Question id={index} key={index} />);
		index++
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
			<Provider store={store}>
                <form className="quiz-builder container" onSubmit={this.sendQuizData} style={{padding: 40, width: 700}}>
                    <div className="form-group">
                    {this.state.questions}
                    </div>
                    <button className="btn btn-primary" type="button" onClick={this.renderQuestion} style={{marginRight: 20}}>Add a question</button>
                    <button className="btn btn-primary" type="submit">Create Quiz</button>
                </form>
			</Provider>			
	    );
	}
});

module.exports = QuizBuilder;