const mongoose = require("mongoose");
const OwnerUser=mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        username:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        phonenum:{
            type:String,
            require:true,
        }
    },
    {collection:'owneruser-data'}
)

const model = mongoose.model('OwnerUserData',OwnerUser);
module.exports=model;