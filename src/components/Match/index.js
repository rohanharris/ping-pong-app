import { connect } from 'react-redux';
import Match from './Match';
import { reset } from "../../data/actions"


const mapStateToProps = (state) => {
    return{
        players: state.players,
        matches: state.matches,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleReset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);