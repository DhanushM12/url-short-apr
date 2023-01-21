const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/urloaprdb');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Successfully connected to MongoDB Database');
})

module.exports = db;