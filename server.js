const express = require('express'); 
const app = express();
const mongoose = require('mongoose')

const cors = require('cors')

require('dotenv').config();
const pw = process.env.MONGO_PW;
const mongo_user = process.env.MONGO_USER;

const wbc = require('./data/wbc-data.js');
const rbc = require('./data/rbc-data.js');

app.use(cors());

app.get('/wbc', (req, res) => {
    res.send(wbc);
});

app.get('/rbc', (req, res) => {
    res.send(rbc);
});

mongoose.connect(`mongodb+srv://${mongo_user}:${pw}@mls-api.wtbh5mx.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=MLS-API`)
  .then(() => console.log('Connected to Database!'));

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});