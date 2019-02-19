/**
 * This is the view of the tasks, the second page of the design, call to an API to generate the data.
 * 
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
import Listtaskitem from '../components/listtaskitem'
import Loading from '../components/loading'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*API variables*/
const API = 'http://3.1.128.196:3001/dependencies/getgroups';

/* Group component */
class Tasks extends Component {
	_isMounted = false;
	
	fetchTasks() {
		const cookies = new Cookies();
	  // Where we're fetching data from
	  fetch('http://3.1.128.196:3001/dependencies/gettasks', {
		   method: 'post',
		   headers: {'Content-Type':'application/json'},
		   body: JSON.stringify({group_id: this.props.match.params.group_id,
		   											 user_token: cookies.get('user_token')})
	   })
	    // We get the API response and receive data in JSON format...
	    .then(response => response.json())
	    // ...then we update the state
	    .then(data => {
	    	if(this._isMounted) {
		      this.setState({
		        tasks: data.tasks,
		        isLoading: false,
		      })
		    }
	    })
	    
	    // Catch any errors we hit and update the app
	    .catch(error => this.setState({ error, isLoading: false }));
	}
	
	state = {
    isLoading: true,
    tasks: [],
    error: null
  }
  
  componentDidMount() {
  	this._isMounted = true;
	  this.fetchTasks();
	}

	componentWillUnmount() {
    this._isMounted = false;
  }
	
	//Render the component and display the list
  render() {
  	const { isLoading, tasks, error } = this.state;
  	const title_after_loaded = "Things To Do";
    return (
     <div id="main-body">
      	<Container>
      		<Row>
      			<Col lg={{ span: 5, offset: 3 }} xl={{ span: 5, offset: 3 }}>
      				<Row>
      					<Col>
      						<Loading title_after_loaded={title_after_loaded} isLoading={isLoading} />
      					</Col>
      					<Col>
      						<a href="http://3.1.128.196:3000/" class="link_groups float-right">ALL GROUPS</a>
      					</Col>
      				</Row>
      			</Col>
      		</Row>
      		<Row>
        		<Col lg={{ span: 5, offset: 3 }} xl={{ span: 5, offset: 3 }}>
			      	{error ? <p>{error.message}</p> : null}
        			{!isLoading ? (
								<Listtaskitem array_tasks={tasks} />
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

export default Tasks;