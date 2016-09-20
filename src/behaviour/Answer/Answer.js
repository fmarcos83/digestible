import Answer from "../../components/Answer/Answer"
import {connect} from "react-redux"
import {createAnswer, fetchAnswer, deleteAnswer, updateAnswer} from "../../data/quiz/actions/index"

const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        
        answerDelete: (id)=>{
            dispatch(deleteAnswer(id));
        },
        answerFetch: ()=>{
            dispatch(fetchAnswer());
        },
        answerUpdate: (id, data)=>{
            dispatch(updateAnswer(id, data));
        }
    }
}

const AnswerComponent = connect(mapStateToProps,mapDispatchToProps)(Answer);

export default AnswerComponent;