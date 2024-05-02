// Hanterar allt som händer med datan i databasen

const DB = require('../../database')

class NotesCollection {
    static createNote(noteInfo) {
        return new Promise((resolve, reject) => {
            const note = {
                type: 'note',
                title: noteInfo.title,
                text: noteInfo.text,
                createdAt: new Date(),
                modifiedAt: new Date()
            }
            DB.insert(note, (err, newDoc) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(newDoc)
                }
            })
            
        })
    }
}

module.exports = NotesCollection