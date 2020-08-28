const notes = require("./notes.js")

const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")

// Yargs use of parameters to the command line interface
yargs.version('0.0.1')
yargs.command({
    command: "ADD",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
            alias: 't'
        },
        body: {
            describe: "Body of the Note",
            demandOption: true,
            type: "string",
            alias: 'b'
        }
    },
    description: "This is going to add a note to the application.",
    handler: (argv) => {
        console.log(chalk.blue("Adding to the NOTE application with ", "Title = \"" + argv.title +
            "\"", "Body = " + argv.body))
        notes.addNotes(argv.title, argv.body)
    }


})
yargs.command({
    command: "REMOVE",
    description: "This is going to remove note from the NOTE application.",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string',
            alias: 't'
        }
    },
    handler: (argv) => {
        console.log(chalk.blue("Removing from the NOTE application. title = ") + "%s", chalk.blue(argv.title))
        notes.remoteNotes(argv.title)
    }
})
yargs.command({
    command: "LIST",
    description: "This is going to list note titles from the NOTE application.",
    handler: () => {
        console.log(chalk.blue("Listing all notes from the application."))
        notes.getNotes();
    }
})
yargs.command({
    command: "READ",
    description: "This is going to read all notes from the NOTE application.",
    builder:{
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string',
            alias: 't'
        }
    },
    handler: (argv) => {
        console.log(chalk.blue("Reading the notes."))
        notes.readNotes(argv.title)
    }
})

yargs.argv
//console.log(process.argv)
//console.log(yargs.argv)
