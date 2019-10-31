// Node Dependencies
var express = require('express');
var burger  = require('../models/burger.js');
var router  = express.Router();



// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// home
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    res.render('index', {burgers: data});
  });
});


// Add burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Eat a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});


module.exports = router;