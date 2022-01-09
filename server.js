require('dotenv').config();
const mongoose = require('mongoose')
const express = require("express")
const routes = require('./routes/avenger')


const app = express();


app.use(express.json()); 

app.use('/', routes);


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

mongoose.connect(
    process.env.MONGODB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true},
    (err) => {
        if (err) return console.log("Error ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);