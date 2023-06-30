const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/contact");

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneno: Number,
    msg: String,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;