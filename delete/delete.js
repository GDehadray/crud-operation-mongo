let express = require("express");
let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
module.exports = express.Router().post("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/testdb",
                          (err,db)=>{
          db.collection("product")
            .deleteOne({'p_id':req.body.p_id},(err,result)=>{
                 if(err)
                   res.send({delete:"fail"});
                   else
                   res.send({delete:"success"});
            });
    });
});