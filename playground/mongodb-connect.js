const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongodb Server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");



  db.collection('Todos').find().count().then((count) => {
    console.log('Todos Count: ', count);
  }, (err) => {
    console.log("Unable to Fetch todos", err);
  });
});