const {
    mongoose
} = require("./../server/db/mongoose");

const {
    Todo
} = require("./../server/models/todo");

const {
    ObjectID
} = require('mongodb');

const {
    User
} = require("./../server/models/user");

var id = "5cc09468ed77f72d52383199";

// if (!ObjectID.isValid(id)) {
//     console.log("Id not valid");
// }

// Todo.find({}).then((todos) => {
//     console.log("Todos", todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log("Id not Found");
//     }
//     console.log("Todo", todo);
// }).catch((e) => console.log(e));

User.findById(id).then((User) => {
    console.log(JSON.stringify(User, undefined, 2));
}, (e) => {
    console.log("Id Is not Found", e);
});