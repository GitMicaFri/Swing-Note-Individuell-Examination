const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json()) // Middleware som tar hand om (parsing) json
app.use(cookieParser());

const userRoute = require('./MVC/Routes/userRoutes')
const notesRoute = require('./MVC/Routes/notesRoutes')

app.use('/api/users', userRoute)
app.use('/api/notes', notesRoute)


// POST method route  -spara data
app.post('/api/notes', (req, res) => { // 2 endpoints(api, notes.js)  
    const note = req.body.note // Hämtar bodyn från postman genom requesten
    console.log(note)
    
  res.send('POST request to the homepage') // spara datan
})


// ska alltid ligga sist i filen
app.listen(PORT, function(err){
    if(err) console.log(err)
    console.log(`Server listening to port ${PORT}`)
})