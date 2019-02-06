import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class github extends Component {
  render() {
  
  	const name = 'Josh Perez';
		const element = <h1>Hello, {name}</h1>;
		
		var shell_exec = require('shell_exec').shell_exec;
		var result = shell_exec('git pull origin master');
  	const script = document.createElement("script");
  	script.src = "console.log(result);";
    script.async = true;
    document.body.appendChild(script);
    ReactDOM.render(
			  element,
			  document.getElementById('root')
			);
    
    return (
			<h1>Hello, world!</h1>
		);
  }
}