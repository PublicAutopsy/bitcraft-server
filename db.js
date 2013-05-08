var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Player = new Schema({
    phoneNumber   : String,
    address       : String,
    timeStamp     : { type: Date, default: Date.now }
});

mongoose.model('Player', Player);

var mongoUri = process.env.MONGOLAB_URI
    || process.env.MONGOHQ_URL
    || 'mongodb://localhost/bitcraft';

mongoose.connect(mongoUri);