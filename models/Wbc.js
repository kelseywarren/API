const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const wbcSchema = new Schema({
    name: String,
    shortName: String,
    description: String,
    image: String
});


module.exports = mongoose.model('Wbc', wbcSchema);


