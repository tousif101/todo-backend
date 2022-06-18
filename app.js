const express = require('express') 
const connectDB = require('./config/db');
const passport = require("passport");
const bodyParser = require("body-parser");
const users = require('./routes/users');

const app = express()
const port = 3000 

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
connectDB().then(r => console.log(r));

app.use(passport.initialize()); //initialize passport
require("./config/passport")(passport); //passport configs

app.get('/',(req,res) => {
	res.send('Hello World') 
})


app.use('/api/users', users);

app.listen (port, ()=> {
	console.log(`App is running on port ${port}`)
})
