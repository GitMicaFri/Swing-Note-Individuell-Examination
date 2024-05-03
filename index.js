const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const swaggerJSON = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc')

const userRoute = require('./MVC/Routes/userRoutes')
const notesRoute = require('./MVC/Routes/notesRoutes')

const PORT = process.env.PORT || 3000
const app = express()

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A sample API for learning Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json()) // Middleware som tar hand om (parsing) json
app.use(cookieParser());


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