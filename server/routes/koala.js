const express = require('express');
let router = express.Router();
const Koala = require('../public/models/koala.schema.js');

router.get('/', function(req, res){
    console.log('got to koala GET');
    
    Koala.find({}).then(function(mongoRes){
        console.log('here is the mongo response', mongoRes);
        res.sendStatus(201);
    }).catch(function(err){
        console.log('error during mongo get request', err);
        res.sendStatus(500);
    });
});

router.post('/', function(req, res){
    console.log('got to koala POST');
    
    let newKoala = new Koala(req.body);
    //save to mongodb, CREATE
    newKoala.save().then( (data) => {
      console.log(data);
      res.sendStatus(201);
    }).catch( (err) => {
      console.log(err);
      res.sendStatus(500)
    })
})

router.put('/:id', function(req, res){
    console.log('Got to put');
    console.log(req.params.id);
    console.log(req.body);
    //update data base
    Koala.findByIdAndUpdate({
      _id: req.params.id //Select what to update
    }, {
      $set : {ready_to_transfer : req.body.ready_to_transfer} //sets what you've selected
    }).then( (response) => {
      res.sendStatus(200);
    })
};

router.delete('/:id', function(req, res){
    console.log('got to koala DELETE');
    Koala.findByIdAndRemove({
        _id: req.params.id
    }).then(function(mongoRes){
        console.log('response from DB', mongoRes);
        res.sendStatus(201);
    }).catch(function(err){
        console.log('error during db delete', err);
        res.sendStatus(500);
    });   
});
