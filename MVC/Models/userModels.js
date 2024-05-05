
const DB = require('../../database') // Importera databasanslutningen

const bcrypt = require('bcrypt') // Importera bcrypt för att hasha lösenord


class UserCollection { // Klass för att hantera användardata i databasen

    
    static async findUserByUsername(username) { // Statisk metod för att hitta en användare med ett specifikt användarnamn
        return new Promise((resolve, reject) => {
            
            DB.findOne({ type: 'user', username: username }, (err, doc) => { // Använder databasens findOne-metod för att söka efter en användare
                if (err) {
                    reject(err); // Hantera fel om något går fel med databasen
                } else {
                    resolve(doc); // Returnera dokumentet om det hittas
                }
            })
        })
    }

    
    static async createUser(username, password) { // Statisk metod för att skapa en ny användare
       
        if (!username || !password) {  // Validering av indata
            throw new Error('Username and password required'); // Kräver både användarnamn och lösenord
        }
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long'); // Lösenord måste vara minst 6 tecken långt
        }
        if (!username.trim() || username.indexOf(' ') >= 0) {
            throw new Error('Username cannot contain spaces'); // Användarnamn får inte innehålla mellanslag
        }

        // Hasha lösenordet med bcrypt
        const encryptedPassword = await bcrypt.hash(password, 10) // Använder bcrypt för att hasha lösenordet med en salt round på 10
        const user = {
            type: "user",
            username: username,
            password: encryptedPassword // Sparar det hashade lösenordet
        }
        return new Promise((resolve, reject) => {
            
            DB.insert(user, (err, newDoc) => { // Använder databasens insert-metod för att spara användaren
                if(err){
                    reject(err) // Hantera fel om något går fel med insättningen
                } else {
                    resolve(newDoc) // Returnera det nya dokumentet om det skapas framgångsrikt
                }
            })
        })
    }
}

module.exports = UserCollection 
// Exportera klassen för användning i andra delar av applikationen
