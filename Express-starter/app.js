const express=require('express')
const app=express()
const path=require('path')
const friendcontroller=require('./controllers/friends.controller')
const friends=require('./models/friends.model')
const PORT=3000

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))

app.use((req,res,next)=>{
    const start=Date.now()
    next()
    const delta=Date.now()-start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})
// app.use('/site',express.static(path.join(__dirname,'public')))
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('index',{
        title:"Friends",
        caption:"Good web series and watch it!!!"
    })
})
app.post('/friends',friendcontroller.postfriend)
// app.get('/',(req,res)=>{
//    res.send("Hello! you are in this express world")
// })
app.get('/friends',friendcontroller.getfriends)

// friends/0
app.get('/friends/:id',friendcontroller.getwithid)
app.listen(PORT,()=>{
    console.log("Server is listening")
})