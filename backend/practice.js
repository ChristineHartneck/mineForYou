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

//getAllProducts
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0-6qr82.mongodb.net/MineForYou?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

//getONEProduct
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0-6qr82.mongodb.net/MineForYou?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  dbo.collection("products").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

//insertONE Product
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  var product = {
          username: "Jessica",
          pictureUrl: "https://rukminim1.flixcart.com/image/714/857/shirt/s/h/y/46-bfrybluesht02-being-fab-original-imaekjr8ymhnxznp.jpeg?q=50",
          gender: "Male",
          title: "Shirt",
          description: "Nice shirt. 1x worn. by urban outfitters. super soft material.",
          category: "Tops",
          colour: "Brown",
          price: 22.5,
          size: "L",
          forSale: "true"
    };
  dbo.collection("products").insertOne(product, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

//deleteONE Product

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0-6qr82.mongodb.net/MineForYou?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  var myquery = { address: 'Mountain 21' };//to change
  dbo.collection("products").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});


//putALL Products (update)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0-6qr82.mongodb.net/MineForYou?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MineForYou");
  var myquery = { address: /^S/ };//to change
  var newvalues = {$set: {name: "Minnie"} };//to change
  dbo.collection("products").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});