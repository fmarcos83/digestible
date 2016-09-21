var React = require('react');
import {logger, promise} from "../../data/quiz/middlewares/middlewares";
import quizApp from "../../data/quiz/reducers";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import QuizBuilder from '../../behaviour/QuizBuilder/QuizBuilder';

var config = {
  apiKey: "AIzaSyCKqcgTJDFTiYrzRtvEnN_1uTFWoyHXzxM",
  authDomain: "digestible-ba926.firebaseapp.com",
  databaseURL: "https://digestible-ba926.firebaseio.com",
  storageBucket: "digestible-ba926.appspot.com",
};

const store = createStore(
	quizApp,
	applyMiddleware(promise, logger)
)
let QuizBuilderWrapper = React.createClass({
    render: function(){
        return(
            <Provider store={store}>
                <QuizBuilder/>
            </Provider>
        );
    }
});
module.exports = QuizBuilderWrapper


