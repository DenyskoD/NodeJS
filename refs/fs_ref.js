const fs = require('fs') //File System
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if(err) throw new Error(err)

//   console.log('"Nones" folder was added')
// })

// 

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err

    console.log('file was renamed')
  }
)



