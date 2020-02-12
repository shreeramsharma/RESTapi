const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

mongoose.connect('mongodb+srv://shree:shreeram1234@cluster0-jc2pk.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true }, () =>
console.log("connected succesfully")
);

app.use(express.json());




app.use('/api/user',authRoute);	
app.use('/api/posts',postRoute);

app.listen(4000,()=> console.log("listening on port 4000"));
