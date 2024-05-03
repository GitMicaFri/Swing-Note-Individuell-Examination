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

     static updateNote(id, noteData) {
        return new Promise((resolve, reject) => {
            const updates = {
                title: noteData.title,
                text: noteData.text,
                modifiedAt: new Date() 
            }
            DB.update({ _id: id }, { $set: updates }, {}, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({ _id: id, ...updates });
                }
            })
        })
    }

    static deleteNote(id) {
        return new Promise((resolve, reject) => {
            DB.remove({ _id: id }, {}, (err, numRemoved) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(numRemoved);
                }
            })
        })
    }
    
     static getAllNotes() {
        return new Promise((resolve, reject) => {
            DB.find({ type: 'note' }, (err, docs) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(docs)
                }
            })
        })
    }
}

module.exports = NotesCollection