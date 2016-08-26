import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';


export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.deleteTaskItem = this.deleteTaskItem.bind(this);
    this.editTaskItem = this.editTaskItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = {
      editName: '',
      editEmail:'',
      showModal: false
    }

  }

  deleteTaskItem(id){
    ClientActions.deleteClient(id);
  }

  editTaskItem(id){
    this.openModal();
    let clients = this.props.clients
    this.setState({editName: clients.name});
    this.setState({editEmail: clients.email})
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  saveEdit(id) {
    let newClient = {
      name: this.state.editName,
      email: this.state.editEmail
    };
    ClientActions.editClient(id, newClient);
    this.setState({editName: '', editEmail: ''});
    this.closeModal();
  }

  cancelEdit() {
    this.closeModal();
  }


  render() {
    let { clients }  = this.props;
    return(
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>Name: {clients.name}</h3>
              <h3>E-mail: {clients.email}</h3>
              <p className="text-center">
                <button className="btn btn-primary" onClick={()=>this.editTaskItem(clients._id)}>Edit</button>
                <button className="btn btn-danger" onClick={()=>this.deleteTaskItem(clients._id)}>Delete</button>
              </p>
            </div>
          </div>
        </div>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span>Name: </span><input type="text" value={this.state.editName} onChange={e => {this.setState({editName: e.target.value}) }}/>
              <span>E-mail: </span><input type="text" value={this.state.editEmail} onChange={e => {this.setState({editEmail: e.target.value}) }}/>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-primary" onClick={() => this.saveEdit(clients._id)}>Save</Button>
              <Button onClick={this.cancelEdit}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
