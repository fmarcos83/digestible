var React = require('react');
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import logger from "../../data/quiz/middlewares/middlewares";
import quizApp from "../../data/quiz/reducers";
// Import Question component 
import Question from '../../behaviour/Question/Question.js';

var config = {
  apiKey: "AIzaSyCKqcgTJDFTiYrzRtvEnN_1uTFWoyHXzxM",
  authDomain: "digestible-ba926.firebaseapp.com",
  databaseURL: "https://digestible-ba926.firebaseio.com",
  storageBucket: "digestible-ba926.appspot.com",
};

const store = createStore(
	quizApp,
	applyMiddleware(logger)
);


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
		event.preventDefault();
		event.stopPropagation();
		
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