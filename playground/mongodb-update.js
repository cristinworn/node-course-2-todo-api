const { MongoClient, ObjectID } = require("mongodb");
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected To Server");
  var db = client.db("TodoApp");

  //   db.collection("Todos")
  //     .findOneAndUpdate(
  //       {
  //         name: "Buta"
  //       },
  //       {
  //         $set: {
  //           name: "Gaurav"
  //         }
  //       },
  //       {
  //         returnOriginal: false
  //       }
  //     )
  //     .then(result => {
  //       console.log(result);
  //     });
  // });

  //   db.collection("Todos")
  //     .findOneAndUpdate(
  //       { name: "Gaurav" },
  //       { $set: { name: "Buta" } },
  //       {
  //         returnOriginal: false
  //       }
  //     )
  //     .then(result => {
  //       console.log(result);
  //     });

  db.collection("Todos")
    .update({ name: "Buta" }, { $inc: { age: 1 } }, { returnOriginal: false })
    .then(result => {
      console.log(result);
    });
});
