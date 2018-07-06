const express = require('express');
let router = express.Router();
const Koala = require('../public/models/koala.schema.js');

router.get('/', function(req, res){
    Koala.find({}).then(function(mongoRes){
        console.log('here is the mongo response', mongoRes);
        res.sendStatus(201);
    }).catch(function(err){
        console.log('error during mongo get request', err);
        res.sendStatus(500);
    });
});
