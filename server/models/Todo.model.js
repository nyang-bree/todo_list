const mongoose = require('mongoose');
 
const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
        default: 'pending'
    }
    
},{timestamps: true});
 
const Todo = mongoose.model('Todo', TodoSchema);
 
module.exports = Todo;
