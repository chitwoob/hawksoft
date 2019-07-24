import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, Button } from 'reactstrap';
import {getContactsApi, addContactApi} from '../api/contactapi'
export class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.setUser = this.setUser.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.addContact = this.addContact.bind(this);

    this.state = {
      dropdownOpen: false,
      user: 'Brad'
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setUser(newUser) {
    this.setState({ user: newUser })
  }

  updateName(evt) {
    this.setState({
      contactName: evt.target.value
    })
  }

  updateNumber(evt) {
    this.setState({
      contactNumber: evt.target.value
    })
  }

  addContact(){
    addContactApi(this.state);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Hello, {this.state.user}</h1>
          </Col>
        </Row>
        <Row>
          <Col><Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Change User
        </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.setUser('Joe')}>Joe</DropdownItem>
              <DropdownItem onClick={() => this.setUser('Brad')}>Brad</DropdownItem>
            </DropdownMenu>
          </Dropdown></Col>
        </Row>
        <Row>
          <Col>
            <h2>Add Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col md='2'>Contact Name</Col>
          <Col md='11'>
            <input onChange={this.updateName} />
          </Col>
        </Row>
        <Row>
          <Col md='2'>Contact Number</Col>
          <Col md='11'>
            <input onChange={this.updateNumber}/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Button onClick={this.addContact}>Add</Button>
          </Col>
        </Row>

      </Container>

    );
  }
}
