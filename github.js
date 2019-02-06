import React, { Component } from 'react';

class github extends Component {
  render() {
  	const name = 'Josh Perez';
		const element = <h1>Hello, {name}</h1>;

		var shell_exec = require('shell_exec').shell_exec;
		 
		var result = shell_exec('git pull origin master');

		ReactDOM.render(
		  <h1>Hello, world!</h1>,
		  document.getElementById('root')
		);

		console.log(result);


		ReactDOM.render(
		  element,
		  document.getElementById('root')
		);
  	
    return ('OK');
  }
}

export default github;

