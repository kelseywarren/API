const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const rbcSchema = new Schema({
    _id: Number,
    name: String,
    description: String,
    image: String
},
{
    versionKey: false,
});


module.exports = mongoose.model('Rbc', rbcSchema);
