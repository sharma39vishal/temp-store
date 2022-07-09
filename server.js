const express = require("express");
const dotenv = require('dotenv').config();
const app= express();
const mongoose=require('mongoose');
const URI = process.env.MONGODB_URL;
app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log("Database connected")
})

const dataSchema = new mongoose.Schema({
    username:String,
    content: String,
    time:String
})
const Data = new mongoose.model("Data", dataSchema)

app.post("/getdata", (req, res)=> {
    const {username} = req.body
    Data.findOne({ username:username}, (err, data) => {
        if(data){
            // console.log(data);
            res.send({message: "Get Data Successfull",content:data.content})          
        } else {
            res.send({message: "Not valid user"})
        }
    })
}) 


app.post("/adddata", (req, res)=> {
    const {username,content} = req.body
    if(username&&content){
    Data.findOne({ username: username}, (err, data) => {
        if(data){
            res.send({message: "Username Already exists"})       
        } else {
            const data = new Data({
                username,
                content,
                time:Date.now()
            })
             data.save(err => {
                 if(err) {
                     res.send(err)
                 } else {
                     res.send( { message: "Successfully Content Was Uploaded" })
                 }
            })
        }
    })
}
else{
    res.send( { message: "Please fill the form" })
    // console.log("invalid")
}                    
})


const PORT=process.env.PORT||9002;

// to deploy
// if(process.env.NODE_ENV=="production"){
//     app.use(express.static("client/build"));
//     const path = require("path");
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(_dirname,'client','build','index.html'));
//     })
// }

app.listen(PORT,() => {
    console.log('Backend was connected at port ',PORT);
})