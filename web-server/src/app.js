const path=require("path")
const hbs=require('hbs')
const express=require("express")
const app=express();
const geocode = require('./utils/geocode')

// define path for express config
const  viewsPath=path.join(__dirname,'../views')


// Setup handlebars engine and views location
app.set("views",viewsPath)
app.set("view engine","hbs")

// setup static directory to serve
app.use(express.static(path.join(__dirname,'../public')))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"Weather app",
        name:"Sarthak"
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.game){
return res.send("error")
    }  
    res.send({forecast:"nice weather"})
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
    })
})
app.get('*',(req,res)=>res.send(" 404 page"))
app.listen(3000,()=>console.log("running"))