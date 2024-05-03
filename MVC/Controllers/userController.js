// Hanterar allt som har med klientens data att göra, tills vi kommer till databasrelaterat, för det hanterar modellen.

const UserCollection = require('../Models/userModels')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const TOKEN_SECRET = 'alksghaddajsgfpajsdiogj'


exports.registerNewUser = async(req, res) => {
    try {
        const {username, password} = req.body
        console.log(username)
        const user = await UserCollection.
        findUserByUsername(username)
        if(user) {
            return res.status(409).send({error: 'Username already exists.'})
        }

        const newUser = await UserCollection.createUser(username, password)
        res.status(200).send({
            message:("User created successfully!"),
            user:{
                id: newUser._id,
                username: newUser.username
            }
        })
    } catch(err) {
        console.error(err)
res.status(500).send({message:'Internal server error'})
    }
}

exports.login = async(req, res) => {
    try {
        const {username, password} = req.body
        const user = await UserCollection.findUserByUsername(username)
        if(!user) {
            return res.status(404).send({error: 'No such user!'})
        }
        const matchedPassword = await bcrypt.compare(password, user.password) // Jfr passwordet
        if(!matchedPassword) {
            return res.status(404).send({error: 'No such password!'})
        }

        // Skapa json signature token
        const token = jwt.sign({username: username}, TOKEN_SECRET)

        // Returnera det i en cookie
        res.cookie('user',token, { maxAge: 900000, httpOnly: true })
        res.status(200).send({message:'Login successful!'})
    } catch(err) {
        res.status(500).send({message: 'Internal server error'})
    }
}

 