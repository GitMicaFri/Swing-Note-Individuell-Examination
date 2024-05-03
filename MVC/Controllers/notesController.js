// Hanterar logiken för alla anteckningar (hämta, skapa, uppdatera och radera)
const NotesCollection = require('../Models/notesModels')

exports.createNote = async(req, res) => {
    try {
        const note = await NotesCollection.createNote(req.body) // Väntar på att modellen ska skapa noten i databasen
        res.status(200).json(note)
    } catch(err){
        res.status(500).json({message: 'Failed to create note!'})
    }
}

exports.updateNote = async (req, res) => {
    try {
        const note = await Note.updateNote(req.params.id, req.body)
        if (note) {
            res.status(200).json(note)
        } else {
            res.status(404).json({ message: 'No such note!'})
        }

    } catch (error) {
        res.status(500).json({ message: 'Unable to update note!'})
    }
}

exports.deleteNote = async (req,res) => {
    try {
        const numRemoved = await Note.deleteNote(req.params.id)
        if(numRemoved > 0) {
            res.status(200).json({ message: 'Note deleted!'})
        } else {
            res.status(404).json({ message: 'No such note!'})
        }
    } catch(error) {
        res.status(500).json({ message: 'Unable to delete note!'})
    }
}

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.getAllNotes()
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({ message: 'Unable to fetch notes!'}) 
    }
}
