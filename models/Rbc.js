const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const rbcSchema = new Schema({
    name: String,
    description: String,
    image: String
});


module.exports = mongoose.model('Rbc', rbcSchema);
