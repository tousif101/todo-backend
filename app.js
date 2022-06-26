const express = require('express') 
const connectDB = require('./config/db');
const passport = require("passport");
const bodyParser = require("body-parser");
const users = require('./routes/users');
const todo = require('./routes/todo')

const cors = require('cors');
require("./config/passport")(passport); 

const app = express()
const port = 3500 

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
app.use(cors())
connectDB()
app.use(passport.initialize()); 


app.get('/',(req,res) => {
	res.send('Hello World') 
})

app.use('/api/users', users);
app.use('/api/todo',passport.authenticate('jwt', { session: false }),todo);

app.listen (port, ()=> {
	console.log(`App is running on port ${port}`)
})