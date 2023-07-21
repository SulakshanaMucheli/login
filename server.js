const express = require('express');
const app=express();
const path=require('path');
app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.get('/',function(req,res){
    res.render('base',{title:"Login system"}); 
})
app.listen(3000,function(req,res){
    console.log("server is listening on port3000");
});