const mongoose = require('mongoose');
let db = mongoose.connection;
mongoose.connect('mongodb://localhost/blogs');

db.on('error',console.error.bind(console,'connection error'));
db.once('open',() => { 
    console.log('DataBase has been connected!'); 
});
module.exports = db;
    