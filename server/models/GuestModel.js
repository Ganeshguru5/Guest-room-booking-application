const mongoose = require("mongoose");
const GuestModel=mongoose.Schema(
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
        phonenum:{
            type:String,
            require:true,
        },
        hotelname:{
            type:String,
            require:true,
        },
        owneruname:{
            type:String,
            require:true,
        }
    },
    {collection:'Guest-data'}
)

const model = mongoose.model('Guest',GuestModel);
module.exports=model;