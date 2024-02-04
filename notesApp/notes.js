const fs= require('fs')
const chalk= require('chalk')

const getNotes = ()=> {
    return ("Your Notes...")
}
const addNote =(title, body)=> {
const notes = loadNotes()
//to remove duplicate titled notes.

// const duplicateNotes = notes.filter((note)=>{

// return note.title === title
// })
const duplicateNote= notes.find((note)=>note.title===title)

//if(duplicateNotes.length ===0){
    
if(!duplicateNote){

notes.push({
    title: title,
    body: body
})

saveNotes(notes)
console.log(chalk.green('New note added!'))
}
else{
    console.log(chalk.red('Note title already taken! '))
}
}

const saveNotes= (notes)=>{
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes= ()=>{
   
   
   try{
    const databuffer= fs.readFileSync('notes.json')
    const dataJSON = databuffer.toString()
    return JSON.parse(dataJSON)
   }
   catch(e){
    return []

   }
   
}

const removeNote = (title)=>{
//  console.log(title)
const currnotes = loadNotes()
const lb = currnotes.length
const tokeep = currnotes.filter(function(currnote){
return (currnote.title !== title )

})


saveNotes(tokeep)
const la = tokeep.length
if(lb!==la){
    const strsuccess="note removed !"
console.log(chalk.green(strsuccess))
}
else{
    const strunsucc="Note does not exist !"
    console.log(chalk.red(strunsucc))
}





}
const myfunction=(argv)=>{
    console.log(argv.title)
 }
const notes = loadNotes()
const listNotes = function(argv){
    console.log(chalk.yellow("Your Notes\n"))
    notes.forEach(myfunction);
    
}
const readNote = (titleread)=>{
    const notes = loadNotes()
const noteread= notes.find((note)=>note.title === titleread )

    if(noteread){
        console.log(chalk.green(noteread.title))
        console.log(noteread.body)
    }
    else{
        console.log(chalk.red("note not found with the given title "))
    }

}




//export object to export multiple functions
module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote,
}