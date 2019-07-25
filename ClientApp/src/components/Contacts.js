import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, Button } from 'reactstrap';
import './Contact.css';

export class Contacts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let table = this.props.data.map((row, index) =>
      <Row key={row.id} className='tableBorder'>
        <Col><Button color="link" onClick={() => this.props.onClick(index)}>{row.contactName}</Button></Col>
        <Col>{row.contactNumber}</Col>
        <Col md='1' className='contactDeleteBtnAlign'>
        <i className="contactDeleteBtn fa fa fa-trash" onClick={() => this.props.onDelete(index)}></i>
         </Col>
      </Row>
    );
    return (
      <Container className='tablePad'>
        <Row className='tableBorder'>
          
          <Col><h3>Contact Name</h3></Col>
          <Col><h3>Contact Number</h3></Col>
          <Col md='1'></Col>
        </Row>
        {table}
      </Container>

    );
  }
}
