//import logo from './logo.svg';
//import './App.css';

/* Import statements */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Link, Route, Switch } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';

/*Pages*/
import Github from './github'

/* App component */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="root">
          <Route exact={true} path='/' render={() => (
            <div className="App">
              Test
            </div>
          )}/>
          <Route exact={true} path='/github' render={() => (
            <div className="App">
            	Test2222
              <Github />
            </div>
          )}/>
          
		    </div>
		  </BrowserRouter>
		);
	}
}

export default App;
