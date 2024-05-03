const express = require('express') // Importerar express
const router = express.Router() // Skapar ett nytt router objekt
const userController = require('../Controllers/userController') // Importerar userController (som hanterar requests som routern får)


router.get('/byId/:id',(req, res) => { // Routen hanterar GET requests till specifikt id
    const user = user.findById(req.params.id).exec() // Hittar och hämtar user enligt spec. id
    res.json(user) // Returnerar user i json-format
})

router.post('/signup', userController.registerNewUser) // Routern hanterar POST requests för reg. av ny användare, genom att köra registerUser-metoden från userController

router.post('/login', userController.login) // Routern hanterar login för användare som ovan


router.put('/',(req, res) => { // Routern hanterar PUT requests till root endpointen. För att uppdatera användare, men skickar bara ett generiskt svar nu
    res.send('PUT request to update user')
})

router.delete('/',(req, res) => { // Routern hanterar DELETE requests till root endpointen. För att radera user, men skickar bara ett generiskt svar nu
    res.send('DELETE request to delete user')
})

module.exports = router; // Exporterar routern så att den kan användas i andra filer