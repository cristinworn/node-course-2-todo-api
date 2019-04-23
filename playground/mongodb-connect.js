const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongodb Server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection("Todos").insertOne({
  //   text: "Something to do",
  //   completed: "false"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert todo", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //   db.collection('User').insertOne({
  //     name: "Avinash Shukla",
  //     age: 19,
  //     location: "Durg"
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert todo", err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });
  //   client.close();


  // db.collection('Todos').find({
  //   _id: '5cbdb30853e6201f92064123'
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to Fetch todos", err);
  // });


  db.collection('Todos').find().count().then((count) => {
    console.log('Todos Count: ', count);
  }, (err) => {
    console.log("Unable to Fetch todos", err);
  });
});