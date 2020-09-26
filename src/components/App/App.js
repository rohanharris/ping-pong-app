import React from 'react';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import '../../App.css';
import Header from '../Header';
import Form from '../Form';
import Match from '../Match';


const App = ({ tournament }) => (

  <>
  <Header />
  { !tournament ? <Form /> : <Match />}

  </>

);


export default App;
