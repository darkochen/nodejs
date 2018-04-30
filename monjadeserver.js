var mongodata=require('./monlistdata.js');
var express=require("express");
var app=express();
 
//set view engine
app.set("view engine","jade")
//set view directory
app.set("views","MyViews")


app.get('/customer',function(req, res){
   mongodata.customers(function(recordset){
   //console.log(recordset);
   res.render('customerPageTP', { customers:recordset });
 });	
});

// app.get('/org',function(req,res){
//    msdata.stuList(function(recordset){
//    //console.log(recordset);
//    res.render('customerTP', { customers:recordset });
//  });	
// });

 
var server=app.listen(3000,function(){
    console.log('Server is running!');
});