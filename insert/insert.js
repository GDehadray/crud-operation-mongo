let express = require("express");
let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
module.exports = express.Router().post("/",(req,res)=>{
     nareshIT.connect("mongodb://127.0.0.1:27017/testdb",(err,db)=>{
         db.collection("product").insertOne({
             'p_id':req.body.p_id,
             'p_name':req.body.p_name,
             'p_cost':req.body.p_cost
         },(err,result)=>{
             if(err)
             res.send({insert:"fail"});
             else
             res.send({insert:"success"});
         });
     });
});