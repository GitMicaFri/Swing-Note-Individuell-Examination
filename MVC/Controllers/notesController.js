
const NotesCollection = require('../Models/notesModels')

exports.createNote = async(req, res) => {
    try {
        const note = await NotesCollection.createNote(req.body) // Väntar på att modellen ska skapa noten i databasen
        res.status(200).json(note)
    } catch(err){
        res.status(500).json({message: 'Failed to create note!'})
    }
}