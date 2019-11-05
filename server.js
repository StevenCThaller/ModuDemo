const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/User_thing', {useNewUrlParser: true});

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

const routes = require('./routes')(app);

app.listen(8000, () => {
    console.log("Listening on port 8000");
})