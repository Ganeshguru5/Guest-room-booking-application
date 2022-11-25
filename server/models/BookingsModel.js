const mongoose = require("mongoose");
const Bookings=mongoose.Schema(
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
        },
        date:{
            type:Date,
            require:true,
        },
        image:{
            type:String,
            require:true
        }
    },
    {collection:'booking-data'}
)

const model = mongoose.model('BookingData',Bookings);
module.exports=model;