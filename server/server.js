const express = require("express");
const bodyParser = require("body-parser");
const {
  ObjectID
} = require('mongodb');

var app = express();

const {
  mongoose
} = require("./db/mongoose");
var {
  Todo
} = require("./models/todo");
var {
  User
} = require("./models/user");

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (e) => {
    res.status(400).send(e)
  });
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({
      todo
    });
  }, (e) => {
    res.status(400).send();
  })
});

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    (doc) => {
      res.send(doc);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();

    }
    res.send(todo);
  }).catch((e) => {
    res.status(404).send();
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000 🔥");
});

module.exports = {
  app
};