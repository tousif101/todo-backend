const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const  connectDB  = async () => {
    console.log("Inside here")
    try {
        await mongoose.connect(db,{useNewUrlParser: true});
        console.log('MongoDB is Connected...');
    } catch (err) {
        console.log("Inside DB Error ")
        console.error(err.message);
    }
};

module.exports = connectDB;