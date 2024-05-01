
exports.registerUser = async(req, res) => {
    try {
        const {username, password} = req.body
        const user = UserCollection.
        findUserByUsername(username)
        if(user) {
            return res.status(409).send({error: 'Username already exists.'})
        }

        const newUser = UserCollection
    } catch(err) {
res.status(500).send(({message:'Internal server error'}))
    }
}

 