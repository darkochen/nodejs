var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:1qaz2wsx@10.126.0.7:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("darko_test");
  var myquery = { name: 'Amy' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n +" document deleted");
    db.close();
  });
});