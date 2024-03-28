const mongoose = require('mongoose');
 
// mongoose.connect('mongodb://127.0.0.1:27017/To-do', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Established a connection to the database'))
//     .catch(err => console.log('Something went wrong when connecting to the database ', err));

mongoose.connect(
    "mongodb+srv://monkannyang:brenda25@cluster1.sjk3wjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)