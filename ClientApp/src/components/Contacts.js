import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, Button } from 'reactstrap';

export class Contacts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let table =  this.props.data.map((row, key) =>
    <Row key={row.id}>
      <Col>{item.name}</Col>
    </Row>
);
    return (
      <Container>
        <Row>
          <Col>
            {row.ContactName}
          </Col>
        </Row>
      </Container>

    );
  }
}
