import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveClients(people) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CLIENTS',
      people
    })
  },
  receiveOneClient(person) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_CLIENT',
      person
    })
  },
  receiveLookupPeople(person){
    AppDispatcher.dispatch({
      type: 'RECEIVE_LOOKUP_PEOPLE',
      person
    })
  },
  receiveAnimals(animals) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ANIMALS',
      animals
    })
  },
  receiveOneAnimal(animal) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_ANIMAL',
      animal
    })
  }
}

export default ServerActions;
