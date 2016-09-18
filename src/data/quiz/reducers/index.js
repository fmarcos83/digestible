quizActions = require "../actions"
intialState = {
    quizs:[],
    questions:[],
    answers: []
}
//quizs
fetchQuizs = function(action, state){
    _.assign({}, state, ) 
}
fetchQuiz = function(action, state){

}
addQuiz = function(action, state){

}
removeQuiz = function(action, state){

}
//questions
fetchQuestions = function(action, state){

}
fetchQuestion = function(action, state){

}
addQuestion = function(action, state){

}
removeQuestion = function(action, state){

}
//answers
fetchAnswers = function(action, state){

}
fetchAnswer = function(action, state){

}
addAnswer = function(action, state){

}
removeAnswer = function(action, state){

}

reducerConfig = function(state, action){
    state = state || initialState;
    switch(true){
        //QUIZS
        case action.type === quizActions.FETCH_QUIZ:
            state = fetchQuiz(action, state);
            break;
        case action.type === quizActions.FETCH_QUIZS:
            state = fetchQuizs(action, state);
            break;
        case action.type === quizActions.CREATE_QUIZ:
            state = addQuiz(action, state);
            break;
        case action.type === quizActions.DELETE_QUIZ:
            state = removeQuiz(action, state);
            break;
        //QUESTIONS    
        case action.type === quizActions.FETCH_QUESTION:
            state = fetchQuestion(action, state);
            break;
        case action.type === quizActions.FETCH_QUESTIONS:
            state = fetchQuestions(action, state);
            break;
        case action.type === quizActions.CREATE_QUESTION:
            state = addQuestion(action, state);
            break;
        case action.type === quizActions.DELETE_QUESTION:
            state = removeQuestion(action, state);
            break;
        //ANSWERS
        case action.type === quizActions.FETCH_ANSWER:
            state = fetchAnswer(action, state);
            break;
        case action.type === quizActions.FETCH_ANSWERS:
            state = fetchAnswers(action, state);
            break;
        case action.type === quizActions.CREATE_ANSWER:
            state = addAnswer(action, state);
            break;
        case action.type === quizActions.DELETE_ANSWER:
            state = removeAnswer(action, state);
            break;
        default:
    }
    return state;
}
module.exports = reducerConfig