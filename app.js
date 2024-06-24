var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var ctrl = require('./loginRouter');
var sha256Hash = require('./sha256Hash');
var user = require('./user');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

 app.use(bodyParser.urlencoded({ extended: true }));


const data =
{
    username: 'SimayEdik',
    password : '12345'
    
};



app.use('/',ctrl);

app.listen(4000);



