let express = require("express");
let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
module.exports = express.Router().post("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/testdb",
                                 (err,db)=>{
       db.collection("product")
          .updateOne({'p_id':req.body.p_id},
                    {$set:{'p_name':req.body.p_name,
                             'p_cost':req.body.p_cost}},
                      (err,result)=>{
         if(err)
            res.send({update:"fail"});
         else
             res.send({update:"success"});
        });
    });
});