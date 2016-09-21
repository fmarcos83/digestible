import QuizBuilder from "../../components/QuizBuilder/QuizBuilder";
import {connect} from "react-redux";
import {syncQuiz, fetchData} from "../../data/quiz/actions/index"

const mapStateToProps = (state)=>{
 return {data: state.toJS()} 
};
const mapDispatchToProps = (dispatch)=>{
 return {
  quizCreate: (data)=>{
   dispatch(syncQuiz(data));
  }
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizBuilder);
