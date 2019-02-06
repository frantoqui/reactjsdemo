//import logo from './logo.svg';
//import './App.css';

/* Import statements */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';

/*Pages*/
import github from './github.js'

/* App component */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <github />
            </div>
          )}/>
		    </div>
		  </BrowserRouter>
		);
	}
}

export default App;
