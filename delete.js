const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ogfox:Maelsav100@cluster0.5lse6bh.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var myquery = { _id: ObjectId('6374fdf195bd1d9be39b46b3') };
  dbo.collection("backdoor").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});