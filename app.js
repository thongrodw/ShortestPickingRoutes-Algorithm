const fs = require('fs');
var express = require('express');
var path = require('path');
require('dotenv').config()

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Router
indexRouter = require("./routes/index");

//App
app.use(indexRouter)

//HTTP Server
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
