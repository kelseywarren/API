const express = require('express'); 
const app = express();
const wbc = require('./wbc-data.js')

app.get('/wbc', (req, res) => {
    res.send(wbc)
})


// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})