const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const User = require("./models/userModel")
const OwnerUser = require('./models/OwnerModel')
const RoomData = require('./models/RoomModel')
const BookHotel = require('./models/BookingsModel')
const ConfirmBooking = require('./models/ConfirmBookModel')
const GuestModel=require('./models/GuestModel')
const URL ='mongodb+srv://Ganeshguru:iH%40teyou7@cluster0.zunhkyn.mongodb.net/Guestroomapp?retryWrites=true&w=majority'
const multer =require('multer')
const path = require('path')
const fs=require('fs')
const morgan = require('morgan')



const { json } = require('express');
const { on } = require('./models/userModel');


app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))

const connectionParams = { 
    useNewUrlParser:true,
    useUnifiedTopology:true,
}



const connectDb=async()=>{
    try{
        await mongoose.connect(URL,connectionParams);
        console.log("connected")
    }
    catch(error){
        console.log(error)
    }
}
connectDb()

app.post('/api/userregister/',async(req,res)=>{
    console.log(req.body);
    console.log("register user called");
    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            phonenum:req.body.phonenum,
        })
        console.log("user creation sucess")
    }
    catch(e){
        console.log("User creation failed")
    }
})

app.post('/api/ownerregister/',async(req,res)=>{
    console.log(req.body);
    console.log("register user called");
    try{
        const home=await OwnerUser.create({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            phonenum:req.body.phonenum,
        })
        console.log(home)
    }
    catch(e){
        console.log("User creation failed")
    }
})

app.post('/api/userlogin/',async(req,res)=>{
    console.log(req.body);
    console.log("I am login called");
    try{
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password,
        })
        if(user){
            console.log("userfind")
            const token=jwt.sign({
                name:user.name,
                username:user.username,
                email:user.email,
                password:user.password,
                phonenum:user.phonenum,
            },'secret123')
            console.log(token);
            return res
                    .status(200)
                    .json({
                        'Gapptoken':token
                    })
        }
        else{
            return res.status(400)
        }
    }
    catch(e){
        console.log("error")
    }
})

app.post('/api/Ownerlogin/',async(req,res)=>{
    console.log(req.body);
    console.log("I am login called");
    try{
        const user = await OwnerUser.findOne({
            email:req.body.email,
            password:req.body.password,
        })
        if(user){
            console.log("userfind")
            const token=jwt.sign({
                name:user.name,
                username:user.username,
                email:user.email,
                password:user.password,
                phonenum:user.phonenum,
            },'secret123')
            console.log(token);
            return res
                    .status(200)
                    .json({
                        'GappOwnertoken':token
                    })
        }
        else{
            return res.status(400)
        }
    }
    catch(e){
        console.log("error")
    }
})


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync('public')){
        fs.mkdirSync('public');
        }

        if(!fs.existsSync('public/images')){
            fs.mkdirSync('public/images');
        }
        cb(null,'public/images');
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+file.originalname);   
    }
})

const upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        const ext = path.extname(file.originalname);
        if(ext!=='.png' && ext !=='.jpg' && ext !=='.jpeg'){
            return cb(new Error("ONly images allowed"))
        }
        cb(null,true)
    }
})


app.post('/api/addroom/',upload.fields([{
    name:"image",
    maxCount:1
}]),async(req,res)=>{
    console.log("Files")
    const {image}=req.files;
    const imagarr=image;
    // console.log(imagarr[0])
    try{
      const room=await RoomData.create({
        name:req.body.name,
        username:req.body.username,
        image:imagarr[0].path,
        location:req.body.location,
        rent:req.body.rent,
        address:req.body.address,
        Minimumstay:req.body.Minimumstay,
        Maximumstay:req.body.Maximumstay,
        Facilities:req.body.Facilities,
        //image:imagarr[0].path,
        
      })  
      console.log(room)
    }

    catch(e){
        console.log(e)
    }

    
})
app.use('/public',express.static(path.join(__dirname,'public')));


app.post('/api/getallrooms/',async(req,res)=>{
    console.log("All rooms called");
    var findallrooms=await RoomData.find();
    
    res.json(findallrooms)
})

app.post('/api/roomdetail/:id/',async(req,res)=>{
    try{
    var roomdetail=await RoomData.findById(req.params.id)
    res.json(roomdetail)
    }
    catch(e){
        console.log("error occured");
    }
})

app.post('/api/ownedrooms/:username',async(req,res)=>{
    try{
        console.log(req.params.username)
        var roomdetail = await RoomData.find({
            username:req.params.username,
        })
        
        res.json(roomdetail);
    }
    catch(e){
        console.log("error")
    }
})
app.post('/api/bookroom/',async(req,res)=>{
    console.log("book room called")
    try{
        await BookHotel.create({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            phonenum:req.body.phonenum,
            hotelname:req.body.hotelname,
            owneruname:req.body.owneruname,
            date:req.body.date,
            image:req.body.image,
        })
        console.log("sucess")
    }
    catch(e){
        console.log("error")
    }
})

app.post('/api/myroombookings/',async(req,res)=>{
    try{
        const response=await BookHotel.find()
        
        res.json(response)
        console.log("respomse send sucessfully")
    }
    catch(e){
        console.log("error")
    }
})

app.post('/api/confirmbooking/:id',async(req,res)=>{
    try{
    const one=await BookHotel.findById(req.params.id)
    console.log(one)
    await ConfirmBooking.create({
        name: one.name,
        email: one.email,
        username: one.username,
        phonenum: one.phonenum,
        hotelname: one.hotelname,
        owneruname:one.owneruname,
    })
    await BookHotel.findByIdAndDelete(req.params.id);
    }
    catch(e){
        console.log(e)
    }
})

app.post('/api/declinebooking/:id',async(req,res)=>{
    try{
    await BookHotel.findByIdAndDelete(req.params.id);
    }
    catch(e){
        console.log("error in delete")
    }
})

app.post('/api/confirmedBookings/',async(req,res)=>{
    try{
        const data=await ConfirmBooking.find()
        res.json(data)
    }
    catch(e){
        console.log("error on ferching")
    }
})

app.post('/api/guestarrived/:id',async(req,res)=>{
    try{
        await GuestModel.create({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            phonenum:req.body.phonenum,
            hotelname:req.body.hotelname,
            owneruname:req.body.owneruname,
        })
        await ConfirmBooking.findByIdAndDelete(req.params.id);
    }
    catch(e){

    }
})



app.post('/api/Guestnow/',async(req,res)=>{
    try{
        const data=await GuestModel.find()
        console.log(data)
        res.json(data)
    }
    catch(e){
        console.log(e)
    }
})

app.put('/api/update/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        updates=req.body;
        const result =await RoomData.findByIdAndUpdate(id,updates)
        console.log("updated")
    }
    catch(e){
        console.log("error")
    }
})

app.post('/api/delete/:id',async(req,res)=>{
    try{
        const deleteone = await RoomData.findByIdAndDelete(req.params.id)
    }
    catch(e){
        console.log(e)
    }
})

app.listen(8080,()=>{
    console.log("server is running")
})




