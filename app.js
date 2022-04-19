const yargs = require("yargs")

const notes = require("./notes")

// console.log("process",process.argv)
console.log("yargs",yargs.argv)



// var name = process.argv[3]
var name = yargs.argv.name;
var desc = yargs.argv.desc;
var command = yargs.argv._[0]


// console.log("name",name);
// console.log("desc",body)
// console.log("command",command)
// console.log(notes.fetchNotes())

switch (command) {
    case "add":
         console.log("adding note")
         notes.addingNote(name,desc)
        break;
    case "remove":
        console.log("remove note")
        notes.remove(name)
        break;
    case "read":
        console.log("reading note");
        notes.readNote(name)
        break;
        case "list":
            console.log("list note");
            notes.listNotes()
        break;
    default:
        console.log("UnKown command")
        break;
}






