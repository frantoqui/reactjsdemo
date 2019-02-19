/**
 * This component generates the list of the home page
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

class listgroupitem extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		//Return the list using the array
		return(	
			<ListGroup>
				{this.props.array_groups.map(group => {
			    const { group_id, title, total, completed } = group;
			    return (
						<ListGroup.Item as="a" action href={"http://3.1.128.196:3000/tasks/" + group.group_id} bsPrefix="list-group-item list-arrow link-group">
					  	<Container>
					 			<Row>
					 				<Col bsPrefix='col size_5 padding_side_0'>
					 					<FontAwesomeIcon icon="caret-right" size="sm" />
					 				</Col>
					 				<Col bsPrefix='col size_95 padding_side_0'>
					 					<Container>
								 			<Row>
								 				<Col bsPrefix='col group_title padding_side_0'>{group.title}</Col>
								 			</Row>
								 			<Row>
								 				<Col bsPrefix='col group_subtitle padding_side_0'>{group.completed} OF {group.total} TASKS COMPLETE</Col>
								 			</Row>
								  	</Container>	 				
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

export default listgroupitem;