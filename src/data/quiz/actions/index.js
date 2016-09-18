actionConfig = {
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
    CREATE_QUESTION: "CREATE_QUESTION",
    DELETE_QUESTION: "DELETE_QUESTION",
    fetchQuestion: function(){
        return {
            type: actionConfig.FETCH_QUESTION 
        }
    },
    createQuestion: function(){
        return {
            type: actionConfig.CREATE_QUESTION 
        }
    },
    deleteQuestion: function(){
        return {
            type: actionConfig.DELETE_QUESTION 
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
    CREATE_ANSWER: "CREATE_ANSWER",
    DELETE_ANSWER: "DELETE_ANSWER",
    fetchAnswer: function(){
       return {
           type: actionConfig.FETCH_ANSWER
       } 
    },
    createAnswer: function(){
       return {
           type: actionConfig.CREATE_ANSWER
       } 
    },
    deleteAnswer: function(){
       return {
           type: actionConfig.DELETE_ANSWER
       } 
    }
}
module.exports = actionConfig 