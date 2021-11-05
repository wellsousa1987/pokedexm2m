import React, {Component} from 'react';

//import { render } from '@testing-library/react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';



class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="container">
          <NavBar/>
          <Dashboard/>
        </div>
      </div>
    );
  }
}

export default App;
