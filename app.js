var express = require('express')
var ejs = require('ejs')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: true
}))

app.use(express.static('views'));

mongoose.connect('mongodb://localhost:27017/MyApp');
//on conneted
mongoose.connection.on('connected',()=>{
    console.log('Connected to db @ 27017 ');
});

//on error
mongoose.connection.on('error',(err)=>{
    if(err)
    console.log('Couldnt Connected to db @ 27017 '+err);
});



app.set('view engine', 'ejs')
var mainRoutes = require('./routes/route')
app.use(mainRoutes);

app.listen(3000, function() {
    console.log('Node.js listening on port ' + 3000)
})