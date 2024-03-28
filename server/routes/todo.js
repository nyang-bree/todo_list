const router =require("express").Router()
const Todo = require("../models/Todo.model")

// const list_el = document.getElementById("#list")
// const create_btn_el = document.getElementBy("create")

let tidos = [];

// create_btn_el.addEventListenner('click', CreateNewTodo);

function CreateNewTodo() {
    console.log("create new Todo");
}


///routes
router.post("/new-todo-form", (req, res) =>{
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    //save the todo 

    newTodo.save()
        .then(() =>{
            console.log("Todo created")
            res.redirect("/")
        })
        .catch(err =>console.log())
    
});

router.patch("/completed", (req, res) =>{
    const {todo} = req.body.status = 'completed';
    const newTodo = new Todo({todo})

    //save the todo 
});

router.get("/edit/todo/:_id", (req, res) =>{
    const {_id} = req.params;
    Todo.editOne({_id}, req.body, {new: true})
    .then((editedTodo) => {
        console.log("Todo deleted");
        res.redirect("/");

    })
    .catch(err => console.log(err));

});

router.get("/delete/todo/:_id", (req, res) =>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Todo deleted");
        res.redirect("/");

    })
    .catch(err => console.log(err));

});




module.exports = router;