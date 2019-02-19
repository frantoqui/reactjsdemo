/**
 * HomePage this component call to the api getGroups to generate the list dynamically
 * Another sub Component is Loader which shows the message loading when the data is being fetched
 * @frantoqui
 */

/*Import Styles*/
import '../css/fonts.css';
import '../css/style.css';

/* Import statements */
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

/*Import Components*/
import Listgroupitem from '../components/listgroupitem'
import Loading from '../components/loading'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*API variables*/
const API = 'http://3.1.128.196:3001/dependencies/getgroups';

/* Group component */
class Groups extends Component {
	_isMounted = false;

	fetchGroups() {
		const cookies = new Cookies();
	  // Where we're fetching data from
	  fetch('http://3.1.128.196:3001/dependencies/getgroups', {
		   method: 'post',
		   headers: {'Content-Type':'application/json'}, 
		   body: JSON.stringify({user_token: cookies.get('user_token')})
	   })
	    // We get the API response and receive data in JSON format...
	    .then(response => response.json())
	    // ...then we update the state
	    .then(data => {
	    	if(this._isMounted) {
		      this.setState({
		        groups: data.groups,
		        isLoading: false,
		      })
		    }
	    })
	    
	    // Catch any errors we hit and update the app
	    .catch(error => this.setState({ error, isLoading: false }));
	}
	
	state = {
    isLoading: true,
    groups: [],
    error: null
  }
  
  componentDidMount() {
  	this._isMounted = true;
	  this.fetchGroups();
	}

	componentWillUnmount() {
    this._isMounted = false;
  }
	//Render the component and display the list
  render() {
  	const { isLoading, groups, error } = this.state;
  	const title_after_loaded = "Things To Do";
    return (
     <div id="main-body">
      	<Container>
      		<Row>
      			<Col lg={{ span: 5, offset: 3 }} xl={{ span: 5, offset: 3 }}>
      				<Loading title_after_loaded={title_after_loaded} isLoading={isLoading} />
      			</Col>
      		</Row>
      		<Row>
        		<Col lg={{ span: 5, offset: 3 }} xl={{ span: 5, offset: 3 }}>
			      	{error ? <p>{error.message}</p> : null}
        			{!isLoading ? (
								<Listgroupitem array_groups={groups} />
				       ) : (
				        null
				      )}
        		</Col>
        	</Row>	
      	</Container>
	    </div>
		);
	}
}

export default Groups;