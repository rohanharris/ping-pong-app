import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Match from './components/Match';

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
