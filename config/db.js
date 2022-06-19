const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
    console.log(db)
    try {
        mongoose.connect(db,{useNewUrlParser: true});
        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connectDB;