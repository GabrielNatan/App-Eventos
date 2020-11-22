import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './global.css'
/* Páginas */
import Home from './view/home/'

function App() {
  return (
      <Router>
        <Router>
          <Route exact path='/' component={Home}/>
        </Router>
      </Router>
      

  ) 
  }
export default App;
