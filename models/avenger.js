const mongoose = require("mongoose");

//avenger schema
const AvengerSchema = new mongoose.Schema({
    name:String,
    image: String,
    real_name: String,
    powers: String,
    abilities: String,
    actor: String,
});

const Avenger = mongoose.model('Avenger', AvengerSchema);
module.exports = Avenger;