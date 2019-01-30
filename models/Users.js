var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// // Define collection and schema for Items
// var User = new Schema({
//   name: String,
//   contact: Number
// });

var userSchema = mongoose.Schema({
    name: String,
    contact: Number
})
var User = mongoose.model('user', userSchema);
module.exports = {
    User
}
