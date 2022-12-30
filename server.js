const express = require("express");
var path=require("path");
const app=express();

app.get("/",function(req,res){
    res.send("<h1>Hello from Sujay</h1>");

});

app.get("/home",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
});

app.listen(3000);
console.log("Server is listening at port 3000");