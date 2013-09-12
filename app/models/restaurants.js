
var mongoose = require ('mongoose');
var Schema = mongoose.Schema

var restaurantsSchema =  new Schema({
  name: {
    type: String
  },
  tags: {
    type: String
  },
  location: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// var restaurants = mongoose.model('Restaurants', restaurantsSchema);
// Restaurants = mongoose.model('Restaurants')

// -- Routes

module.exports = function(app) {
  app.get('/restaurants', function(req, res) {
    console.log(req.query);

    res.send({msg:"Get info!"});
  })
  app.post('/restaurants', function(req, res) {
    console.log(req.query);

    res.send({msg:"Update or modify existing!"});
  })
  app.put('/restaurants', function(req, res) {
    console.log(req.query);

    res.send({msg:"Create new!"});
  })
  app.delete('/restaurants', function(req, res) {
    console.log(req.query);

    res.send({msg:"Remove!"});
  })
}