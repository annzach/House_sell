const express = require('express');
const router = express.Router();
const Animal = require('../models/animal');

router.route('/')
  .get((req, res)=>{
    Animal.find({}, (err, animals)=>{
      res.status(err ? 400 :200).send(err || animals);
    }).populate('owner')
  })
  .post((req, res)=>{
    Animal.create(req.body, (err, animal)=>{
      if(err){
        return res.status(400).send(err);
      }
      res.send(animal);
    });
  });

router.route('/:id')
  .get((req, res) =>{
  // GET /api/animal/dfff98767890987fda
  // find animal by id
    Animal.findById(req.params.id, (err, animal)=>{
      if(err || !animal){
        return res.status(400).send(err || 'Animal not found');
      }
      res.send(animal);
    }).populate('owner')
  })
  .delete((req, res) => {
    Animal.findByIdAndRemove(req.params.id, err => {
      if(err){
        return res.status(400).send(err);
      }
      Animal.find({}, (err, animals) =>{
        res.status(err? 400 : 200).send(err || animals);
      })
    }).populate('owner')
  })
  .put((req, res) => {
    Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, animal) => {
      if(err){
        return res.status(400).send(err);
      }
      // else { animal.save(); }
      Animal.find({}, (err,animals) =>{
        res.status(err ? 400 : 200).send(err || animals);
      }).populate('owner')
    })
  })

router.put('/:animalId/addOwner/:ownerId', (req, res)=>{
  Animal.findById(req.params.animalId, (err, animal)=>{
    if(err || !animal){
      return res.status(400).send(err || 'Animal not found');
    }

    let ownerId = req.params.ownerId;

    animal.owner = ownerId;
    animal.save((err, savedAnimal)=>{
      res.status(err ? 400 :200).send(err || savedAnimal);
    });
  });
});




module.exports = router;
