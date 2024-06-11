const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const Rbc = require('./models/Rbc');

const cors = require('cors')

require('dotenv').config();
const pw = process.env.MONGO_PW;
const mongo_user = process.env.MONGO_USER;
const port = process.env.PORT || 4000;


app.use(cors());

mongoose.connect(`mongodb+srv://${mongo_user}:${pw}@mls-api.wtbh5mx.mongodb.net/MLS-API?retryWrites=true&w=majority&appName=MLS-API`)
  .then(() => {
    console.log('Connected to Database!')
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
  });
})
.catch((error) => {
    console.log("Failed to connect to database"); 
});

const wbcSchema = new mongoose.Schema({
    name: String,
    shortName: String,
    description: String,
    image: String   
});

const wbcModel = mongoose.model("wbc", wbcSchema, "wbc");

app.get("/wbc", async(req, res) => {
    const wbcData = await wbcModel.find();
    res.json(wbcData)
    console.log(wbcData)
});

/*
const rbc = new Rbc({
    name: 'Burr Cell',
    description: 'Dull spiked edge around entirety of cell',
    image: 'url'
})
*/

app.get("/rbc", async(req, res) => {
    const rbcData = await Rbc.find();
    res.send({"data": rbcData})
})