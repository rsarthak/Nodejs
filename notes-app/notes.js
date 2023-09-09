const fs=require('fs')
const getNotes=function(){
return "NOtes..."
}
const addNote = function (title, body) {
    const notes = loadNotes();
    notes.push({
      title: title,
      body: body,
    }); 
    savenotes(notes);

  };
  
const savenotes=function(notes){
const datajson=JSON.stringify(notes)
fs.writeFileSync('notes.json',datajson)
}
const loadNotes=function(){
    try{
        const data=fs.readFileSync('notes.json') // Buffer
        const datajson=data.toString() // json
        return JSON.parse(datajson) // object
    }
    catch(e){
        return []
    }

}


function remove(title){
const notes=loadNotes();
const newnotes=notes.filter((note)=>note.title!==title)
if(notes.length>newnotes.length){
savenotes(newnotes)
}
}

function listNotes(){
const notes=loadNotes()
notes.map((note)=>console.log(note.title))
}

function readNotes(title){
const notes=loadNotes()
const noteBody=notes.find((note)=>note.title===title)
console.log(noteBody.title+ "-" + " "+ noteBody.body)
}
module.exports={getNotes:getNotes,addNote:addNote,remove:remove,listNotes:listNotes,readNotes:readNotes}