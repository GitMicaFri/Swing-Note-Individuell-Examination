// Hanterar allt som har med klientens data att göra, tills vi kommer till databasrelaterat, för det hanterar modellen.

const UserCollection = require('../Models/userModels') // Importerar modellen för användare.
const jwt = require('jsonwebtoken') // Importerar jwt för hantering av jsonwebtoken.
const bcrypt = require('bcrypt') // Importerar bcrypt för att hasha och jämföra lösenord.

const TOKEN_SECRET = 'alksghaddajsgfpajsdiogj' // Hemlig nyckel för att signera jwt.

// Hanterar registrering av ny användare.
exports.registerNewUser = async(req, res) => { 
    try {
        const {username, password} = req.body // Få ut env.namn och lösenord från rec.bodyn.
        //console.log(username) // Logga anv. namn.
        const user = await UserCollection. // Söka existerande användare med samma anv.namn.
        findUserByUsername(username)
        if(user) { // Om anv. finns, returnera felstatus
            return res.status(409).send({error: 'Username already exists.'})
        }

        // Om anv.namn inte är taget, skapa ny användare.
        const newUser = await UserCollection.createUser(username, password)
        res.status(200).send({
            message:("User created successfully!"),
            user:{
                id: newUser._id, // Nytt användar-id.
                username: newUser.username // Nytt anv.namn.
            }
        })
    } catch(err) {
        console.error(err) // Logga fel.
res.status(500).send({message:'Internal server error'}) // Hantera serverfel.
    }
}

// Hanterar inloggning av användare.
exports.login = async(req, res) => {
    try {
        // Få ut anv.namn + lösenord från req.bodyn.
        const {username, password} = req.body
        const user = await UserCollection.findUserByUsername(username)
        if(!user) { // Om anv. inte finns, returnera felstatus.
            return res.status(404).send({error: 'No such user!'})
        }
        const matchedPassword = await bcrypt.compare(password, user.password) // Jfr passwordet
        if(!matchedPassword) { // OM lösenord inte är rätt, returnera felstatus.
            return res.status(404).send({error: 'No such password!'})
        }

        // Skapa json signature token
        const token = jwt.sign({username: username}, TOKEN_SECRET)

        // Returnera json signature token i en cookie
        res.cookie('user',token, { maxAge: 900000, httpOnly: true })
        res.status(200).send({message:'Login successful!'})
    } catch(err) {
        res.status(500).send({message: 'Internal server error'}) // Hantera serverfel.
    }
}

 