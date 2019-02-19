/**
 * Generates a random cookie between 1 and 100000 for the user_token, also handle routes
 * 
 * @frantoqui
 */

/* Import statements */
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

/*Import Pages*/
import Groups from './view/Groups';
import Tasks from './view/tasks';

/*Import Components*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)

/* App component and Routing*/
class App extends Component {
  render() {
  	//Generates a random cookie between 1 and 100000 for the user_token
  	const cookies = new Cookies();
	  if(!cookies.get('user_token')) {
			cookies.set('user_token', Math.floor((Math.random() * 100000) + 1), { path: '/' });
		}
    return (
      <BrowserRouter>
      	<div>
	        <Route exact path="/" component={Groups}/>
	        <Route exact path="/tasks/:group_id" component={Tasks}/>
        </div>
		  </BrowserRouter>
		);
	}
}

export default App;