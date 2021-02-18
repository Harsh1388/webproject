const { static } = require("express");
const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
 
const port=process.env.Port || 8123; //process.env.Port || 81


app.set('view engine','hbs');
app.set('views',path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,"../templates/partials"));

//public static path
app.use(express.static(path.join(__dirname,"../public")));


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:'Oops! page not Found, Click here to go back'
    });
});
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});