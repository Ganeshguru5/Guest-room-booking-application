const mongoose = require("mongoose");
const RoomData=mongoose.Schema(
    {
        
        username:{
            type:String,
            require:true,
        },
        name:{
            type:String,
            require:true,
        },
        image:{
            type:String,
            require:true,
        },
        location:{
            type:String,
            require:true,
        },
        rent:{
            type:String,
            require:true,
        },
        address:{
            type:String,
            require:true,
        },
        Facilities:{
            type:String,
            require:true,
        },
        Minimumstay:{
            type:String,
            require:true,
        },
        Maximumstay:{
            type:String,
            require:true,
        },
        Description:{
            type:String,
            require:true
        }
        
    },
    {collection:'room-data'}
)

const model = mongoose.model('RoomData',RoomData);
module.exports=model;