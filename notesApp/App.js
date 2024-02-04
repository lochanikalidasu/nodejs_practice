const chalk = require('chalk')
const yargs = require('yargs')

const Notes = require('./notes.js')
const { title } = require('process')
yargs.version('1.1.0')
//add,remove, read, list

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder: {
        //builder is an object 
        title : {
            describe:'title of note',
            // to make a property required 
            demandOption: true,
            type: 'string',


        },
        body: {
            describe:"add the body of the note to be added",
            demandOption: true,
            type:'string'
        }
        

    },
    handler(argv){
       Notes.addNote(argv.title, argv.body)
       
    }
})

//create remove command 
yargs.command({
    command: 'remove',
    describe: 'To remove an existing note ',
    builder: {
        title:{
            demandOption:true,
            type:'string',
            describe: 'title of the note to be removed'
        }

        

    },
    handler(argv){
      Notes.removeNote(argv.title)
    }
})

//create a read command 

yargs.command({
    command:'read',
    describe:'to read an existing note ',
    builder:{
    title:{
describe:"title to read the note ",
demandOption:true,
type:'string',

    }
    },
    handler: function(argv){
        Notes.readNote(argv.title)
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe:'to list the notes existing ',
    handler: function(argv){
        //console.log("listing the notes !! ")
       Notes.listNotes(argv)
    }
})

yargs.parse()



