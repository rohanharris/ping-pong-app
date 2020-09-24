import { connect } from 'react-redux';
import Match from './Match';
import { reset } from "../../data/actions"


const mapStateToProps = () => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return{
        handleReset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);