import quizActions from "../actions"
import {Map, List, fromJS} from "immutable"

let initialState = Map({"questions":new List()});

//quizs
let fetchQuizs = function(action, state){
}
let fetchQuiz = function(action, state){

}
let addQuiz = function(action, state){

}
let removeQuiz = function(action, state){

}
//questions
let questionId = 0
let fetchQuestions = function(action, state){

}
let fetchQuestion = function(action, state){

}
let removeQuestion = function(action, state){

}
let updateQuestion = function(action, state){
    state = state.updateIn(["questions", action.id], new Map(), (data)=>{ return data.mergeDeep(action.data); });
    console.log('object', state.toJS());
    return state;
}
//answers
let fetchAnswers = function(action, state){

}
let fetchAnswer = function(action, state){

}
let updateAnswer = function(action, state){
    state = state.updateIn(["questions",action.data.questionId,"answers",action.data.id], new Map(), (data)=>{ return data.mergeDeep(action.data);});
    console.log("answer", state.toJS());
    return state;
}
let removeAnswer = function(action, state){

}

let reducerConfig = function(state, action){
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
        case action.type === quizActions.DELETE_QUESTION:
            state = removeQuestion(action, state);
            break;
        case action.type === quizActions.UPDATE_QUESTION:
            state = updateQuestion(action, state);
            break;
        //ANSWERS
        case action.type === quizActions.FETCH_ANSWER:
            state = fetchAnswer(action, state);
            break;
        case action.type === quizActions.FETCH_ANSWERS:
            state = fetchAnswers(action, state);
            break;
        case action.type === quizActions.UPDATE_ANSWER:
            state = updateAnswer(action, state);
            break;
        case action.type === quizActions.DELETE_ANSWER:
            state = removeAnswer(action, state);
            break;
        default:
    }
    return state;
}
module.exports = reducerConfig