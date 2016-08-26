import React, { Component } from 'react';
import SearchClient from './SearchClient';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';
import ClientList from './ClientList';
import NewClientForm from './NewClientForm';
import GetAllClients from './GetAllClients';


export default class ClientsPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      clients: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ClientActions.getAllClients();
    ClientStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ClientStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      clients: ClientStore.getAll()
    });
  }

  render() {
    let {clients} = this.state;

    return (
      <div className="container">
        <h1 className='text-center'>Clients Information</h1>
        <NewClientForm />
        <GetAllClients clients={clients}/>
      </div>
    )
  }
}

// <SearchClient />
// <ClientList clients={clients} />
