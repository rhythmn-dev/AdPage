const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose'),
      config = require('../config/DB')
const mongotocsv = require('mongo-to-csv')

let app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

let options = {
  database: 'carusers', // required
  collection: 'users', // required
  fields: ['name','contact', 'types', 'cartypes'], // required
  output: './output/Daniel.csv', // required
  // allValidOptions: '-q \'{ "name": "cat" }\'' // optional
};

    var userSchema = mongoose.Schema({
        name: String,
        contact: Number,
        types: String,
        cartypes: String
    })
    var User = mongoose.model('user', userSchema);
    
    module.exports = {
        User
    }

      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB).then(
          () => {console.log('Database is connected') },
          err => { console.log('Cannot connect to the database'+ err)}
        );

      console.log('inside server.js')

      app.post('/addusers', (req, res) => {
        console.log(req.body)
        User.create(
          {name: req.body.data.name, contact: req.body.data.contact, types: req.body.data.types, cartypes: req.body.data.cartypes},
          function(err, result){
            if(err){
              console.log(err)
            }
            mongotocsv.export(options, function (err, success) {
              console.log('Exported the DB to CSV!')
              console.log(err);
              console.log(success);
          });
            res.json(result)
            
        });
      })
      app.get('/getusers', (req, res) => {
        User.find(
          function(err, result){
            if(err){
              console.log(err)
            }
            res.json(result)
        });
      })

      app.use(express.static('public'));
      // app.use('/users', userRoutes);
      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });
