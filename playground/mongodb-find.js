// const MongoClient = require("mongodb").MongoClient;

// MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
//     if (err) throw err;
//     console.log("Connected to MongoDB server");
//     const db = client.db("TodoApp");
//     db.collection('Todos').find().toArray((err, result) => {
//         if (err) throw err;
//         console.log(JSON.stringify(result, undefined, 2))

//     });
// });


var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) throw err;
    var db = client.db("TodoApp");
    db.collection("Todos").find({
        _id: ObjectID('5cbdb358d194501fd97ba6d8')
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });

});


// const MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:28017/'
// MongoClient.connect(url, (err, client) => {
//     if (err) throw err;
//     const db = client.db("TodoApp");
//     var query = {
//         completed: false
//     };
//     db.collection("Todos").find(query).toArray((err, result) => {
//         if (err) throw err;
//         console.log(JSON.stringify(result, undefined, 2));
//         db.close();
//     });
// });