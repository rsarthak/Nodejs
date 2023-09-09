const yargs=require('yargs')
const fs=require('fs')
const notes=require('./notes.js')
// csustommize yargs version
yargs.version('1.1.2')

// add command
yargs.command({
    command:"add",
    description:"Add a new note",
    builder:{
      title:{
          describe:"Note title",
          demandOption:false,
          type:'string'
},
body:{
describe:"Note body",
demandOption:true,
type:'string'
}
    },
    handler:function(argv){
      notes.addNote(argv.title,argv.body)
    }
})

// remove command
yargs.command({
    command:"remove",
    description:"removing note",
    builder:{
        title:{
            describe:"Node title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){notes.remove(argv.title)}
})


// reading command
yargs.command({
    command:"read",
    description:"reading note",
    builder:{
        title:{
            describe:"Node title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){notes.readNotes(argv.title)}
})

// listing command
yargs.command({
    command:"list",
    description:"listing note",
    handler:function(){notes.listNotes()}
})

// add ,remove, read ,list
 



yargs.parse()
// console.log(yargs.argv)
