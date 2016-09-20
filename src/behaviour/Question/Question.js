import Question from "../../components/Question/Question"
import {connect} from "react-redux"
import {createQuestion, fetchQuestion, deleteQuestion, updateQuestion} from "../../data/quiz/actions/index"

const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {

        questionDelete: (id)=>{
            dispatch(deleteQuestion(id));
        },
        questionFetch: ()=>{
            dispatch(fetchQuestion());
        },
        questionUpdate: (data)=>{
            dispatch(updateQuestion(data.id, data));
        }
    }
}

const QuestionComponent = connect(mapStateToProps,mapDispatchToProps)(Question);

export default QuestionComponent;
