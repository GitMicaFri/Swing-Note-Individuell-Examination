// Hanterar allt som händer med data som rör anteckningar i databasen

const DB = require('../../database') // importerar databaseens interface

class NotesCollection {

    static createNote(noteInfo) { // Tar notes info och insertar en ny anteckning i databasen.
        return new Promise((resolve, reject) => { // Wrappar  operationen i ett promise för att hantera den asynkront.
            const note = { // Sätter värden för titel, text, och uppdaterar datum för när något händer med datan.
                type: 'note',
                title: noteInfo.title,
                text: noteInfo.text,
                createdAt: new Date(),
                modifiedAt: new Date()
            }
            DB.insert(note, (err, newDoc) => {
                if(err) { 
                    reject(err)// Om det inte går bra: felmeddelande.
                } else { 
                    resolve(newDoc) // Om det går bra, skapas en ny anteckning.
                }
            })
            
        })
    }

     static updateNote(id, noteData) { // Uppdaterar befintlig anteckning i databasen.
        return new Promise((resolve, reject) => {  // Wrappar  operationen i ett promise för att hantera den asynkront.
            const updates = { // Sätter uppdaterade värden för text, och uppdaterar datum för när något händer med datan.
                title: noteData.title,
                text: noteData.text,
                modifiedAt: new Date() 
            }
            DB.update({ _id: id }, { $set: updates }, {}, (err) => {
                if (err) {
                    reject(err) // Om det inte går bra: felmeddelande.
                } else {
                    resolve({ _id: id, ...updates }); // kopierar innehållet i objektet och gör ett nytt objekt
                }
            })
        })
    }

    static deleteNote(id) { // Raderar en anteckning med specifikt id.
        return new Promise((resolve, reject) => {  // Wrappar  operationen i ett promise för att hantera den asynkront.
            DB.remove({ _id: id }, {}, (err, numRemoved) => {  // Raderar data med specifikt id.
                if (err) {
                    reject(err) // OM det int egår bra, felmeddelande.
                } else {
                    resolve(numRemoved); // OM det går bra, raderar anteckning.
                }
            })
        })
    }
    
     static getAllNotes() {
        return new Promise((resolve, reject) => {
            DB.find({ type: 'note' }, (err, docs) => {
                if(err) {
                    reject(err) // OM det inte går bra, felmeddelande.
                } else {
                    resolve(docs) // Om det går bra, hämtar alla anteckningar.
                }
            })
        })
    }
}

module.exports = NotesCollection