var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');
const url = require('url');
// const { FD } = require('./public/index');
// var dbConn = mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/bookstore');

// mongodb+srv://tutnetwork:Thunder@cluster0.39qnub8.mongodb.net/sturdy?retryWrites=true&w=majority

var app = express();
const PORT = process.env.PORT || 3030

connectToDb((err) => {
    if(!err){

        app.listen(PORT, () => {
            console.log('app lsiteneing on port ' + PORT)
        })
        
        db = getDb()
        
    }
})



// const fd = require('./m')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/jquery', function (req, res) {
    delete req.body._id; // for safety reasons
    db.collection('backdoor').insertOne(req.body);
      
    res.send('Data receved:\n' + JSON.stringify(req.body));
    console.log(JSON.stringiify(req.body))
});

app.get('/hall',  function(req, res) {
    
        db.collection('backdoor').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
      
    });
});


app.use('/delete', function(req, res){
    // var dbo = db.db("test");
    // let value = '63753dbec88e27a674d11b40'
    const reqvalue = req.url
    const search_params = reqvalue.replace('/?', "")
    // const id = search_params.get('id');
    console.log(search_params)
    var myquery = { _id: ObjectId(search_params) };
    db.collection("backdoor").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      res.send('Deleted Succesfully! Go back and refresh Page ')
    //   db.close();
    });
})


app.use('/verify', function(req, res){
    // const reqvalue = req.url
    const reqvalue = req.url
    const search_params = reqvalue.replace('/?', "")
    // const id = search_params.get('id');
    // console.log(search_params)
    // var myquery = {  };

    // db.collection('vstatus').insertOne({ "EmployeeName" : "NewMartin"});
    db.collection("backdoor").updateOne(
        {_id: ObjectId(search_params)},
        {$set: { "status" : '<i class="fa-solid fa-check-double"></i>', "style" : "display:none;"}}
        );
      
  
    // console.log(myquery)
    // .replace('/?', "")

    // var myquery = { _id: ObjectId(search_params) };
    // db.collection("backdoor").deleteOne(myquery, function(err, obj) {
    //   if (err) throw err;
    //   console.log("1 document deleted");
    //   res.send('Deleted Succesfully! Go back and refresh Page ')

    // });

      res.send('Verified Succesfully!\n' );
})

// app.listen(process.env.PORT || 3030, process.env.IP || '0.0.0.0' );
