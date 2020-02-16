let express = require("express");
let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;

module.exports = express.Router().get("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/testdb",
                                  (err,db)=>{
         db.collection("product").find()
           .toArray((err,records)=>{
               res.send(records);
           });
     });
});