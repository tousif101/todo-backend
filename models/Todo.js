const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default:false
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Todo = mongoose.model("todo", TodoSchema);
