const DB = require('../database')
const bcrypt = require('bcrypt')

class UserCollection {
    static async findUserByUsername(username) {
        return new Promise((resolve, reject) => {
            DB.findOne({ type: 'user', username: username }, (err, doc) => {                 
                if (err) {                     
                    reject(err);                 
                } else {                     
                    resolve(doc); 
                }
            }) 
            
        })
    }

    static async createUser(username, password) {
         if (!username || !password) {
            throw new Error('Username and password required');
        }
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }
        if (!username.trim() || username.indexOf(' ') >= 0) {
            throw new Error('Username cannot contain spaces');
        }

        const encryptedPassword = await bcrypt.hash(password, 10)
        const user = {
            type: "user",
            username: "username",
            password: "encryptedPassword"
        }
        
    }
}




module.exports = UserCollection