const express = require('express'); 
const app = express();
const cors = require('cors')
const wbc = require('./data/wbc-data.js');
const rbc = require('./data/rbc-data.js');

app.use(cors());

app.get('/wbc', (req, res) => {
    res.send(wbc);
});

app.get('/rbc', (req, res) => {
    res.send(rbc);
});


// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});