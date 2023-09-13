const path=require("path")
const hbs=require('hbs')
const express=require("express")
const app=express();

// define path for express config
const  viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set("views",viewsPath)
app.set("view engine","hbs")
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"Weather app",
        name:"Sarthak"
    })
})
app.get('*',(req,res)=>res.send(" 404 page"))
app.listen(3000,()=>console.log("running"))