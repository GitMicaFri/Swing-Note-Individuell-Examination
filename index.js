const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

const userRoute = require('./MVC/Routes/users')
const notesRoute = require('./MVC/Routes/notes')

app.use('/users', userRoute)
app.use('/notes', notesRoute)

app.use(express.json()) // Interprets what comes in to JSON.



// POST method route  -save data
app.post('/api/notes', (req, res) => {
    // 2 endpoints(api, notes.js)
    // få ut data från requesten
    const note = req.body.note
    console.log(note)
    // spara datan
  res.send('POST request to the homepage')
})



// ska ligga sist i filen
app.listen(PORT, function(err){
    if(err) console.log(err)
    console.log(`Server listening to port ${PORT}`)
})