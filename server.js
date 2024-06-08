const express = require('express'); 
const app = express();



// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})