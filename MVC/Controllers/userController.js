const UserCollection = require('../Models/userModels')



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

 