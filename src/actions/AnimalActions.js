import API from '../API';

const AnimalActions = {
  getAllAnimals: API.getAllAnimals,
  createAnimal(animal) {
    API.createAnimal(animal);
  },
  editAnimal(id, animal){
    API.editAnimal(id, animal);
  },
  deleteAnimal(id){
    API.deleteAnimal(id);
  }
}

export default AnimalActions;
