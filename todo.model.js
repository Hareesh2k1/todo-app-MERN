const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {
        type: String,
        required: true
    },
    todo_responsible: {
        type: String,
        required: true
    },
    todo_duedate: {
        type: Date, default: Date.now     
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);
