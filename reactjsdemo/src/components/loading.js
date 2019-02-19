/**
 * This component displays a Loading message until the data is fetched
 * 
 * @frantoqui
 */

/* Import statements */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class loading extends Component {
	state = {
    isLoading: true,
  }
  
  //Determine if the state in the parent component changed, if yes update the message
	static getDerivedStateFromProps(nextProps, prevState)  {
	  if(nextProps.isLoading!==prevState.isLoading){
     return { isLoading: nextProps.isLoading};
	  }
	  else return null;
	}
	
	constructor(props) {
		super(props);
	}
	
	//Return the message, if the flag is Loading is true display loading, if not displays the title
	render() {
		const { isLoading } = this.state;
		console.log(isLoading);
		return (
			<div>
				{!isLoading ? (
					<h2>{this.props.title_after_loaded}</h2>
				) : (
			    <h2>Loading...</h2>
			  )}
			</div>
		)		
	}
}

export default loading;