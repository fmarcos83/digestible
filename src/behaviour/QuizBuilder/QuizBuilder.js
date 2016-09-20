import QuizBuilder from "../../components/QuizBuilder/QuizBuilder";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
 return {}
};

const mapDispatchToProps = (dispatch)=>{
 return {
  onSubmit: ()=>{}
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizBuilder);
