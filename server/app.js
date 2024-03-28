const express = require("express")


const app = express()

//connect to mongodb
require('./server/models/config/mongoose.config')


//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","css","html")

//routes
app.use(require("./routes/main"))
app.use(require("./routes/todo"))



app.listen(5000, () => console.log("server started listening in port 5000"));