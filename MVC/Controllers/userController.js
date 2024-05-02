// Hanterar allt som har med klientens data att göra, tills vi kommer till databasrelaterat, för det hanterar modellen.

const UserCollection = require('../Models/userModels')
const bcrypt = require('bcrypt')



exports.registerUser = async(req, res) => {
    try {
        const {username, password} = req.body
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
res.status(500).send({message:'Internal server error'})
    }
}

exports.login = async(req, res) => {
    try {
        const {username, password} = req.body
        const user = await UserCollection.findUserByUsername(username)
        if(!user) {
            return res.status(404).send({error: 'User not found'})
        }
        const matchedPassword = await bcrypt.compare(password, user.password) // Jfr passwordet
        if(!matchedPassword) {
            return res.status(404).send({error: 'No such password'})
        }
        res.status(200).send({message:'Login successful!'})
    } catch(err) {
        res.status(500).send({message: 'Internal server error'})
    }
}

 