const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const wbcSchema = new Schema({
    _id: Number,
    name: String,
    types: [
        String,
    ], 
    description: String,
    image: String
},
{
    versionKey: false
});


module.exports = mongoose.model('Wbc', wbcSchema);


