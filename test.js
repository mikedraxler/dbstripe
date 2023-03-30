var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
const { connectToDb, getDb } = require('./db');
// const { FD } = require('./public/index');
// var dbConn = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/bookstore');

// mongodb+srv://tutnetwork:Thunder@cluster0.39qnub8.mongodb.net/sturdy?retryWrites=true&w=majority

var app = express();

connectToDb((err) => {
    if(!err){

        app.listen(3330, () => {
            console.log('app lsiteneing on port 3330')
        })
        
        db = getDb()
        
    }
})



// const fd = require('./m')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback', function (req, res) {
    delete req.body._id; // for safety reasons
    db.collection('feedbacks').insertOne(req.body);
      
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-feedbacks',  function(req, res) {
    
        db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
      
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
