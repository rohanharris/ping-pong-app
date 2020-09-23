import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import Match from './Match/Match';


// import { createStore } from 'redux';

// const initialState = {
//     players: [],
//     name: "",
//     error: false,

// };



// added to store.js

// const store = createStore(
  // reducer, 
  // initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  // );


// dont need this. 
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