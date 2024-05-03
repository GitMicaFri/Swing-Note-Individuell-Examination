const express = require('express') // Importerar express
const router = express.Router() // Skapar ett nytt router objekt
const userController = require('../Controllers/userController')   // Importerar userController (som hanterar requests som routern får)

/**
 * @openapi
 * /:
 *   get:
 *     description: Find specified user by id
 *     responses: 
 *       200: 
 *         description: Returns user found.
 *          404: 
 *              description: Returns user not found.
 */
router.get('/byId/:id',(req, res) => { // Routen hanterar GET requests till specifikt id
    const user = user.findById(req.params.id).exec() // Hittar och hämtar user enligt spec. id
    if(!user){
        res.status(404).json({message:'User not found!'})
    }
    res.status(200).json(user) // Om det går bra: Returnerar user i json-format
})

router.post('/signup', userController.registerNewUser) // Routern hanterar POST requests för reg. av ny användare, genom att köra registerUser-metoden från userController

router.post('/login', userController.login) // Routern hanterar login för användare som ovan




module.exports = router; // Exporterar routern så att den kan användas i andra filer