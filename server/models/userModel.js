const mongoose = require("mongoose");
const User=mongoose.Schema(
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
    {collection:'user-data'}
)

const model = mongoose.model('UserData',User);
module.exports=model;