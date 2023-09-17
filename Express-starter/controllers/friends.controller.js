
const path=require('path')
const friends=require('../models/friends.model')
function postfriend(req,res){
        const newfriend={
            id:friends.length,
         name:req.body.name,
        }
        friends.push(newfriend)
        res.json(friends)   
}

function getfriends(req,res){
    res.sendFile(path.join(__dirname,'..','public','sarthak_portfolio.jpg'))
      
}
function getwithid(req,res){
  
        const id=Number(req.params.id);
        const friend=friends[id];
    if(friend)
        res.status(200).json(friend)
    else
    res.status(404).json({
        error:"Friend does not exist"
    })
    
}

module.exports={
    postfriend,
    getfriends,
    getwithid
}