const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
app.set('scripts','./public');
app.get('/',(req,res)=>{
    res.render('main.ejs');
});
app.listen(3003,(req,res)=>{
    console.log('server started!');
});