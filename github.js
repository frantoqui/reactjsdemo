import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class github extends Component {
  render() {
  
  	const name = 'Josh Perez';
		const element = <h1>Hello, {name}</h1>;
		
		var shell_exec = require('shell_exec').shell_exec;
		var result = shell_exec('git pull origin master');
  	
    return (
    	ReactDOM.render(
			  <h1>Hello, world!</h1>,
			  document.getElementById('root')
			);

			console.log(result);


			ReactDOM.render(
			  element,
			  document.getElementById('root')
			);
    );
  }
}