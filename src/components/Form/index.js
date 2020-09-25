import { connect } from 'react-redux';
import Form from './Form';
import { addPlayer, deletePlayer } from '../../data/actions';


const mapStateToProps = (state ) => {
    return{
    players: state.players,
    }
};


const mapDispatchToProps = (dispatch) => {
    return{

        handlePlayers: (players) => dispatch(addPlayer(players)),
        

        // delete: (id) => dispatch(deletePlayer(id)),
    }

};

// this comes from inital(and so store) - it is accepted as state is passed as an argument. this is then able to be used as a prop in Form component

// connects to Provider wrapper which holds whole App.
export default connect(mapStateToProps, mapDispatchToProps)(Form);


// dont want react component to deal with state as will lose reusability so have this index.js file. wraps form component with another component that has access to the store.