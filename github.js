import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Github extends Component {
  state = { 
  
  }
  render() {
    return (
			<h1>Hello, world!</h1>
		);
  }
  componentDidUpdate(prevProps) {
  	const name = 'Josh Perez';
		const element = <h1>Hello, {name}</h1>;
    ReactDOM.render(
			 element,
			 document.getElementById('root')
		);
  	var shell_exec = require('shell_exec').shell_exec;
		var result = shell_exec('git pull origin master');
  	const script = document.createElement("script");
  	script.src = "console.log(result);";
    script.async = true;
    document.body.appendChild(script);
  }
}