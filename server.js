// Express 
const express = require('express'); 
const app = express();

// Mongoose 
const mongoose = require('mongoose');

// Environment Variables 
require('dotenv').config();
const mongo = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;

// Models
const Rbc = require('./models/Rbc');
const Wbc = require('./models/Wbc');

// Cors 
const cors = require('cors');
app.use(cors());

// Database and server connect 
mongoose.connect(`${mongo}`)
  .then(() => {
    console.log('Connected to Database!')
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
  });
})
.catch((error) => {
    console.log("Failed to connect to database"); 
});


// Request wbc data
app.get("/wbc", async(req, res) => {
    const wbcData = await Wbc.find();
    res.json({"data": wbcData})
    console.log(wbcData)
});

// Request rbc data 
app.get("/rbc", async(req, res) => {
    const rbcData = await Rbc.find();
    res.json({"data": rbcData})
    console.log(rbcData)
});
