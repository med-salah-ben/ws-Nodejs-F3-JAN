const fs = require("fs")

const fetchNotes = () =>{
    try {
        return  JSON.parse(fs.readFileSync("notes.txt"))
    } catch (error) {
        return []
    }
}

console.log(fetchNotes())

const addingNote = (name,desc) =>{
    var notes = fetchNotes()
    var note = {name,desc};
    notes.push(note)
    fs.writeFileSync("notes.txt",JSON.stringify(notes))
}

const remove = (name) =>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note)=>note.name !== name)
    fs.writeFileSync('notes.txt',JSON.stringify(filterNotes))
}

var readNote =(name)=>{
    var notes =fetchNotes();
    var filterNotes = notes.filter((note)=>note.name === name)
    prettyNote(filterNotes[0])
}

let listNotes = () => {
    var notes = fetchNotes()
    // notes.forEach((note)=>prettyNote(note))
    for(i=0; i < notes.length ;i++){
        prettyNote(notes[i])
    }
}

prettyNote = (note) =>{
    console.log("********************")
    console.log(`Name: ${note.name}`)
    console.log(`Desc: ${note.desc}`)
}



module.exports = {
    addingNote,
    remove,
    readNote,
    listNotes
}