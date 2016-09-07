var React = require('react');

// Answered Questions Component 
// <AnsweredQuestions />

/* 

Question text along with answer text are added to this array for questions the user has answered correctly.
This array will be used for the spaced repetition algorithm that will let the user quiz themselves on previously answered questions.

*/

var Answer = React.createClass({
	getInitialState: function() {
		return {
			answeredQuestions: []
		};
	},
	render: function () {
	    return (
	    	<div className="answered-questions">
	    		
	    	</div>
	   	);
	}
});

module.exports = Answer;