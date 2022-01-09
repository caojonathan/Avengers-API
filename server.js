require('dotenv').config();
const mongoose = require('mongoose')
const express = require("express")
const routes = require('./routes/avenger')
const helmet = require('helmet')
const compression = require('compression');

const app = express();


app.use(express.json()); 
app.use('/', routes);
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html");
});
app.use('/uploads', express.static('./uploads'));
app.use(helmet());
app.use(compression());


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

mongoose.connect(
    process.env.MONGODB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true,

        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } },
    },
    (err) => {
        if (err) return console.log("Error ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);