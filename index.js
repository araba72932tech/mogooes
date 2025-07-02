const mongoose = require('mongoose')
const express = require('express');
const PORT = 9000;
const app = express()
const uri = "mongodb+srv://arabaisaiah:KJx6QkeaSyZO2794@cluster0.vxx26q0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(PORT, ()=>{
    console.log('app is running on port something')
})

const connection = mongoose.connect(uri)

connection.then(()=>{
     console.log('connected to mongodb');
}).catch((err)=>{
    console.log('error connecting to mongodb')
    console.log(err);
    
})