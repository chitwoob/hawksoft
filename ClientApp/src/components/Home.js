import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, Button } from 'reactstrap';
import { getContactsApi, addContactApi, updateContactApi, deleteContactApi } from '../api/contactapi';
import { Contacts } from './Contacts';
import './Home.css';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.setUser = this.setUser.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.addContact = this.addContact.bind(this);
    this.addContact = this.addContact.bind(this);
    this.handleContactUpdate = this.handleContactUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      dropdownOpen: false,
      user: 'Brad',
      status: 'Add',
      contact: {
        user: 'Brad',
        contactName: '',
        contactNumber: ''
      },
      contactList: []
    };
  }

  componentDidMount() {
    this.getContacts(this.state.user);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setUser(newUser) {
    this.setState({ user: newUser, contact: { ...this.state.contact, user: newUser } });
    this.getContacts(newUser);
  }

  updateName(evt) {
    this.setState({ contact: { ...this.state.contact, contactName: evt.target.value } });
  }

  updateNumber(evt) {
    this.setState({ contact: { ...this.state.contact, contactNumber: evt.target.value } })
  }

  async addContact() {

    this.setState({
      contactList: []
    });

    if (this.state.status === 'Add') {
      await addContactApi(this.state.contact);
    }
    else {
      await updateContactApi(this.state.contact);
    }

    this.getContacts(this.state.user);
  }

  async getContacts(user) {
    this.setState({
      contactList: []
    });
    let contacts = await getContactsApi(user);
    this.setState({
      contactList: contacts
    })
  }

  handleContactUpdate(index) {
    let current = this.state.contactList[index];

    this.setState({
      contact: current,
      status: 'Update'
    })
  }

  handleCancel() {
    this.setState({
      contact: {
        user: this.state.user,
        contactName: '',
        contactNumber: ''
      },
      status: 'Add',
    })
  }

  async handleDelete(index) {
    let current = this.state.contactList[index];
    this.setState({
      contactList: []
    });
    await deleteContactApi(current.id);
    this.getContacts(this.state.user);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md='3'>
            <h1>Hello, {this.state.user}</h1>
          </Col>
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
            <Contacts data={this.state.contactList} onClick={this.handleContactUpdate} onDelete={this.handleDelete}/>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h2>Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col md='2'>Contact Name</Col>
          <Col md='11'>
            <input onChange={this.updateName} value={this.state.contact.contactName} />
          </Col>
        </Row>
        <Row>
          <Col md='2'>Contact Number</Col>
          <Col md='11'>
            <input onChange={this.updateNumber} value={this.state.contact.contactNumber} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className='homebtn' onClick={this.addContact}>{this.state.status}</Button>
            <Button className='homebtn' onClick={this.handleCancel}>Cancel</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
