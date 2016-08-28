import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Import React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Import views
import HomeContainer from './components/Home/Home.js';
import ArticleInfoContainer from './components/ArticleInfo/ArticleInfo.js';
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCKqcgTJDFTiYrzRtvEnN_1uTFWoyHXzxM",
    authDomain: "digestible-ba926.firebaseapp.com",
    databaseURL: "https://digestible-ba926.firebaseio.com",
    storageBucket: "digestible-ba926.appspot.com",
};

firebase.initializeApp(config);

// Renders entire app to the screen
ReactDOM.render(
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		{/* Display Home component on initial load */}
    		<IndexRoute component={HomeContainer}/>
    		<Route path="/article-info" component={ArticleInfoContainer}/>
    	</Route>
  	</Router> , document.getElementById('root'));
