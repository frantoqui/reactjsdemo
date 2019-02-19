/**
 * This component generates the list for the tasks
 * 
 * @frantoqui
 */

/* Import statements */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkbox from '../components/checkbox'

class listtaskitem extends Component {
	constructor(props) {
		super(props);
	}
	/*This function contains the logic to display the checkbox if the difference between the dependent 
	and the completed is bigger than zero, then displays locked, if the completed is bigger than zero
	then displays the locked, if the difference is iqual to zero and is completed is also equal to zero
	displays the incomplete checkbox
	*/
	renderElement(task_id, difference, task, is_completed) {
		if(difference > 0 )
		  return(<Checkbox task_id={task_id} state="Locked" title={task} />)
		 else if( difference == 0 && is_completed == 0)
		  return(<Checkbox task_id={task_id} state="Incomplete" title={task} />)
		 else if(is_completed > 0 )
		  return(<Checkbox task_id={task_id} state="Completed" title={task} />)
	}
	
	//Display the list with the checkboxes
	render() {
		const checked=true;
		return(	
			<ListGroup>
				{this.props.array_tasks.map(task_array => {
			    const { task_id, task, dependents, completed, difference, is_completed } = task_array;
			    return (
						<ListGroup.Item bsPrefix="list-group-item">
					  	<Container>
					 			<Row>
					 				<Col bsPrefix='col padding_side_0'>
					 					 { this.renderElement(task_id, difference, task, is_completed) }
					 				</Col>
					 			</Row> 	
					  	</Container>
					  </ListGroup.Item>
			    );
			  })}
		  </ListGroup>
		)		
	}
}

export default listtaskitem;