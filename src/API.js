import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getAllClients(){
    axios.get('/api/people')
      .then(res => res.data)
      .then(ServerActions.receiveClients)
      .catch(console.error);
  },
  createClient(person) {
    axios.post('/api/people', person)
      .then(res => res.data)
      .then(ServerActions.receiveOneClient)
      .catch(console.error);
  },
  lookup(email){
    axios.get(`/api/people/email/${email}`)
      .then(res => res.data)
      .then(ServerActions.receiveLookupPeople)
      .catch(console.error);
  },
  editClient(id, client){
    axios.put(`/api/people/${id}`, client)
      .then(res => res.data)
      .then(ServerActions.receiveClients)
      .catch(console.error);
  },
  deleteClient(id) {
    axios.delete(`/api/people/${id}`)
    .then(this.getAllClients())
  },
  getAllAnimals(){
    axios.get('/api/animals')
      .then(res => res.data)
      .then(ServerActions.receiveAnimals)
      .catch(console.error);
  },
  createAnimal(animal) {
    axios.post('/api/animals', animal)
      .then(res => res.data)
      .then(ServerActions.receiveOneAnimal)
      .catch(console.error);
  },
  editAnimal(id, Animal){
    axios.put(`/api/animals/${id}`,Animal)
    .then(this.getAllAnimals())
  },
  deleteAnimal(id) {
    axios.delete(`/api/animals/${id}`)
    .then(this.getAllAnimals())
  },
  addOwner(animal_id, owner_id){
    axios.put(`/api/animals/${animal_id}/addOwner/${owner_id}`)
      .then(this.getAllAnimals())
  }
}

export default API;
