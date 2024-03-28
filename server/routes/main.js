const Todo = require("../models/Todo.model");

const router = require("express").Router()

router.get("/", async(req, res) =>{
    const allTodos = await Todo.find();
    res.render("lndex.html", {todo: allTodos})
})


module.exports = router;




