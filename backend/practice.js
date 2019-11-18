var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0-6qr82.mongodb.net/MineForYou?retryWrites=true&w=majority";

//getALL
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  dbo.collection("user").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].uploadedItems)
    
    db.close();
  });
});

//insertONE
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  var myobj = {
        username: "Jessica",
        password: "2d3345",
        uploadedItems: [],
        boughtItems:[],
        likedItems: []
    };
  dbo.collection("user").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});