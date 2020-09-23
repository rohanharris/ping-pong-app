import { connect } from "react-redux";
 
import App from "./App";

const mapStateToProps = ({ tournament }) => { 
    return {
        tournament: tournament,
    }; 
};

export default connect(mapStateToProps)(App);