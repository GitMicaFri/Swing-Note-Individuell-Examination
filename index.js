const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const userRoute = require('./MVC/Routes/userRoutes');
const notesRoute = require('./MVC/Routes/notesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Lägg till Swagger UI med hjälp av den statiska swagger.json
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware för att hantera JSON-data och cookies
app.use(express.json());
app.use(cookieParser());

// Registrera dina rutter
app.use('/api/users', userRoute);
app.use('/api/notes', notesRoute);

// Starta servern
app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    }
    console.log(`Server listening on port ${PORT}`);
});
