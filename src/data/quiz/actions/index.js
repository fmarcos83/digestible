let actionConfig = {
    //QUIZS
    //plural
    FETCH_QUIZS: "FETCH_QUIZS",
    fetchQuizs: function(filter){
        return {
            type: actionConfig.FETCH_QUIZS,
            filter: filter
        }
    },
    //singular
    FETCH_QUIZ:"FETCH_QUIZ",
    CREATE_QUIZ: "CREATE_QUIZ",
    DELETE_QUIZ: "CREATE_QUIZ",
    fetchQuiz: function(id){
        return {
            type: actionConfig.FETCH_QUIZ 
        }
    },
    createQuiz: function(){
        return {
            type: actionConfig.CREATE_QUIZ 
        }
    },
    deleteQuiz: function(){
        return {
            type: actionConfig.DELETE_QUIZ 
        }
    },
    
    //QUESTIONS
    //plural
    FETCH_QUESTIONS: "FETCH_QUESTIONS",
    fetchQuestions: function(){
        return {
            type: actionConfig.FETCH_QUESTIONS 
        }
    },
    //singular
    FETCH_QUESTION: "FETCH_QUESTION",
    DELETE_QUESTION: "DELETE_QUESTION",
    UPDATE_QUESTION: "UPDATE_QUESTION",
    fetchQuestion: function(){
        return {
            type: actionConfig.FETCH_QUESTION 
        }
    },
    deleteQuestion: function(id){
        return {
            type: actionConfig.DELETE_QUESTION,
            id: id
        }
    },
    updateQuestion: function(id, data){
        return {
            type: actionConfig.UPDATE_QUESTION,
            id: id,
            data: data
        }
    },
    
    //ANSWERS
    //plural
    FETCH_ANSWERS: "FETCH_ANSWERS",
    fetchAnswers: function(){
       return {
           type: actionConfig.FETCH_ANSWERS
       } 
    },
    //singular
    FETCH_ANSWER: "FETCH_ANSWER",
    DELETE_ANSWER: "DELETE_ANSWER",
    UPDATE_ANSWER: "UPDATE_ANSWER",
    fetchAnswer: function(){
       return {
           type: actionConfig.FETCH_ANSWER
       } 
    },
    deleteAnswer: function(id){
       return {
           type: actionConfig.DELETE_ANSWER,
           id: id
       } 
    },
    updateAnswer: function(id, data){
        return {
            type: actionConfig.UPDATE_ANSWER,
            id: id,
            data: data
        }
    },
    //FIREBASE INTERACTION
    SYNC_QUIZ:'SYNC_QUIZ',
    FETCH_DATA: 'FETCH_DATA',
    fetchData: function(){
        return {
            type: actionConfig.FETCH_DATA
        }    
    },
    syncQuiz: function(data){
        console.log('DATA', data);
        return {
            type: actionConfig.SYNC_QUIZ,
            promise: firebase.database().ref('quiz').push(data)
        }
    }
}
module.exports = actionConfig 