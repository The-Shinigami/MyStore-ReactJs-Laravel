
import isLoggedReducer from "./isLogged";
import currentPageReducer from "./currentPage";
import { Connect } from "react-redux/es/components/connect";
const mapStateToProps = state => ({
    isLogged: isLoggedReducer,
    currentPage: currentPageReducer
});
/* const mapDispatchToProps = () => ({ 
    increment, 
    decrement
}); */
export default connect(
    mapStateToProps/* ,
    mapDispatchToProps() */
)(App);