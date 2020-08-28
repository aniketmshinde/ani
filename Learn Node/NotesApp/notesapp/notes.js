const fs = require("fs")
const chalk = require("chalk")

const notesFile = "notes.json"

const getNotes = () => {
    //Load all notes to an object
    const notes = loadNotes("notes.json")
    notes.forEach((note)=>{
        console.log(chalk.bgGreenBright(note.title))
        console.log(chalk.green(note.body))
    })
}

//Function to add notes. It will load notes from the file
// add the note passed as parameter to it and then it will save.
const addNotes = (title, body) => {
    //loadNOtes
    const allNotes = loadNotes(notesFile)

    //check duplicate note titles
    const duplicateNotes = allNotes.filter((note) =>  note.title === title )

    if (duplicateNotes.length === 0) {
        //adding notes
        allNotes.push({
            "title": title,
            "body": body
        })
        //save notes
        saveNotes(allNotes, notesFile)
        console.log("Notes Added")
    } else {
        console.error("Notes already taken!!")
    }
}

//This functional would be loading the notes from the file passed to it.
// return would be the JAVASCRIPT Object of Notes.
function loadNotes(fileName) {
    try {
        const dataBuffer = fs.readFileSync(fileName)
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        console.error(e.message)
        return []
    }
}

//This function is to save note to the file. Notes are passed as parameter to the function.
function saveNotes(notes, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(notes))
}

// This function is going to load notes from the file and then remove the specified note from the file
const removeNotes = (title) => {
    let allNotes = loadNotes("notes.json")

    const lengthBefore = allNotes.length;
    allNotes = allNotes.filter((note) => { return note.title !== title})

    if (lengthBefore === allNotes.length) {
        console.log(chalk.red("Title = %s") + chalk.red(" not found."), chalk.red(title))
    }else{
        console.log(chalk.green("Title = %s") + chalk.green(" removed Successfully."), chalk.green(title))
    }

    saveNotes(allNotes, "notes.json")
}

const readNotes = (title) => {
    const notes = loadNotes("notes.json")
    const requiredNote = notes.find((note) => note.title === title)

    if (requiredNote) {
        console.log(chalk.bgGreen.underline.bold(requiredNote.title))
        console.log(requiredNote.body)
    } else {
        console.error(chalk.red("We couldn't find the note your are looking at."))
    }
}

const notes = {
    "getNotes": getNotes,
    "addNotes": addNotes,
    "remoteNotes": removeNotes,
    "readNotes": readNotes
}

module.exports = notes