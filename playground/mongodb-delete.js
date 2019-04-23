const {
    MongoClient,
    ObjectID
} = require("mongodb");
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    console.log("Connected To Server");
    var db = client.db("TodoApp");
    //deleteMany
    // db.collection("Todos").deleteMany({
    //     text: 'Walk the dog'
    // }).then((result) => {
    //     console.log(result);
    // });


    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: "Something to do"
    // }).then((result) => {
    //     console.log(result);
    //     client.close();
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({
    //     completed: 'false'
    // }).then((result) => {
    //     console.log(result);
    // })


    //exercise

    db.collection('Todos').findOneAndDelete({
        _id: ObjectID('5cbf571fa5cf562ba8cc3f55')
    }).then((result) => {
        console.log(result);
    });

    db.collection('Todos').deleteOne({
        name: 'Shikhar'
    }).then((result) => {
        console.log(result);

        client.close();
    });

});