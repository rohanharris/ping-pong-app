import { connect } from 'react-redux';
import Form from './Form';

// const mapStateToProps = (state) => {
//     return{
//         players: state.players, 
       
//     }

// } this can be turned into this as only returning one value (functions!)--> 

const mapStateToProps = ({ players }) => ({
    players: state.players
})

// this comes from inital(and so store) - it is accepted as state is passed as an argument. this is then able to be used as a prop in Form component

// connects to Provider wrapper which holds whole App.
export default connect(mapStateToProps)(Form);


// dont want react component to deal with state as will lose reusability so have this index.js file. wraps form component with another component that has access to the store.