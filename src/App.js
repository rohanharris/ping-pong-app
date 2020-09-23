import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Match from './components/Match';


// import { createStore } from 'redux';

// const initialState = {
//     players: [],
//     name: "",
//     error: false,

// };


// const newPlayer = (state) => {
//   return { ...state, players: state.players + players };
// }

// const deletePlayer = (state) => {

//   return { ...state, players: state.players - players}

// }


// const reducer = (state, action) => {
//   switch (action.type) {
//     case "NEWPLAYER" : return newPlayer(state);
        // case "DELETE" : return deletePlayer(state);
        // case "RESET" : return initialState,
//     default: return state;
//   }
// }


// added to store.js

// const store = createStore(
  // reducer, 
  // initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  // );



// store.suscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "NEWPLAYER" })





function App() {
  return (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path ="/">
          <Header />
          <Form />
        </Route>

        <Route exact path="/match">
          <Match />
        </Route>
      </Switch>
   </Router>
  </React.Fragment>
  );
}

export default App;
