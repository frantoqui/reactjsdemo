/**
 * Component that builds the checkbox based in the state of locked, completed, incomplete
 * It also makes a post call when the checkbox is build
 * @frantoqui
 */
 
import '../css/style.css';

/* Import statements */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import Cookies from 'universal-cookie';

enableRipple(true);

// To render CheckBox.
class checkbox extends Component {
	_isMounted = false;

	state = {
    isLoading: true,
    tasks: [],
    error: null
  }
  
  componentDidMount() {
  	this._isMounted = true;
	}

	componentWillUnmount() {
    this._isMounted = false;
  }
	
	change(args) {
    const cookies = new Cookies();
	  // Where we're fetching data from
	  fetch('http://3.1.128.196:3001/dependencies/settaskcompleted', {
		   method: 'post',
		   headers: {'Content-Type':'application/json'},
		   body: JSON.stringify({task_id: args.event.target.defaultValue,
		   											 user_token: cookies.get('user_token')})
	   })
	    // We get the API response and receive data in JSON format...
	    .then(response => response.json())
	    // ...then we update the state
	    .then(data => {
	    	if(this._isMounted) {
		      window.location.reload();
		    }
	    })
	    
	    // Catch any errors we hit and update the app
	    .catch(error => this.setState({ error, isLoading: false }));
	}
	
	constructor(props) {
		super(props);
	}
  render() {
  	//Return Checkbox according to the state
		if(this.props.state == 'Locked')
		  return(<CheckBoxComponent label={this.props.title} value={this.props.task_id} cssClass="cbx-task cbx-locked" disabled={true} checked={true}/>  )
		else if(this.props.state == 'Incomplete')
		  return(<CheckBoxComponent label={this.props.title} value={this.props.task_id} cssClass="cbx-task cbx-completed"  change={this.change.bind(this)} checked={false}/>)
		else if(this.props.state == 'Completed')
			return(<CheckBoxComponent label={this.props.title} value={this.props.task_id} cssClass="cbx-task cbx-completed" disabled={true} checked={true} />)
  }
}

export default checkbox;