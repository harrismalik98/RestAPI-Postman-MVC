const Client = require("../models/contactModel");


// ============================ GET METHOD ============================ //
const get = (req, res) => {
    Client.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
}



// ============================ POST METHOD ============================ //
const post = (req, res) => {

    const client = new Client(req.body);
    client.save(function (err) {
        if (err) {
            res.status(400).send("Data Not Save Successfully");
        }
        else {
            res.status(201).send("Data Save Successfully");
        }
    });
}



// ============================ GET SPECIFIED USER METHOD ============================ //
const getSpecifiedUser = (req, res) => {
    const id = req.params.id;

    Client.findById(id, function(err, data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
}



// ============================ PUT METHOD ============================ //
const put = (req, res) => {
    const id = req.params.id;

    Client.findByIdAndUpdate(id, req.body ,function(err, data){
        if(err){
            res.send(err);
        }
        else{
            res.send("Data Update Successfully");
        }
    });
}



// ============================ PATCH METHOD ============================ //
const patch = (req, res) => {
    const id = req.params.id;

    Client.findByIdAndUpdate(id, req.body ,function(err, data){
        if(err){
            res.send(err);
        }
        else{
            res.send("Data Update Successfully");
        }
    });
}



// ============================ DELETE METHOD ============================ //
const del = (req, res) => {
    const id = req.params.id;

    Client.findByIdAndDelete(id, req.body ,function(err, data){
        if(err){
            res.send(err);
        }
        else{
            res.send("Data Deleted Successfully");
        }
    });
}



// ============================ PORT LISTEN METHOD ============================ //
const listen = (req, res) => {
    console.log("Server running at port 3000");
}



module.exports = {get, post, getSpecifiedUser, put, patch, del, listen};