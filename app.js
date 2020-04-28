const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


//set up port
const port = process.env.PORT || 3000;

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", require('./routes/api.js'))



app.use(express.static(path.join(__dirname, './client/dist')))


app.listen(port, () => {
    console.log(`app is running on ${port}`);
});
