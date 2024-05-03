// Hanterar logiken för alla anteckningar (hämta, skapa, uppdatera och radera).

const NotesCollection = require('../Models/notesModels') // Importerar NotesCollection via angiven path.

//Hanterar skapandet av ny anteckning. Använder createNote från NotesCollection för att spara den i databasen.
exports.createNote = async(req, res) => {
    try {
        const note = await NotesCollection.createNote(req.body) // Väntar på att modellen ska skapa noten i databasen.
        res.status(200).json(note) // Går det bra så sparas anteckningen med status 200.
    } catch(err){
        res.status(500).json({message: 'Failed to create note!'}) // Går det dåligt skickas status 500 med felmeddelande.
    }
}

// Funktionen uppdaterar befintliga anteckningar
exports.updateNote = async (req, res) => {
    try {
        const note = await NotesCollection.updateNote(req.params.id, req.body) // Uppdaterar befintlig anteckning via specifikt id.
        if (note) {
            res.status(200).json(note) // Går det bra så sparas anteckningen med status 200.
        } else {
            res.status(404).json({ message: 'No such note!'}) // Hittas inte anteckningen så skickas felmeddelande.
        }

    } catch (error) {
        res.status(500).json({ message: 'Unable to update note!'}) // Går det dåligt skickas status 500 med felmeddelande.
    }
}

// Funktionen raderar specifik anteckning
exports.deleteNote = async (req,res) => {
    try {
        const numRemoved = await NotesCollection.deleteNote(req.params.id) // Radera anteckning på specifikt id.
        if(numRemoved > 0) {
            res.status(200).json({ message: 'Note deleted!'}) // Går det bra så raderas anteckningen med status 200.
        } else {
            res.status(404).json({ message: 'No such note!'}) // Hittas inte anteckningen så skickas felmeddelande.
        }
    } catch(error) {
        res.status(500).json({ message: 'Unable to delete note!'}) // Går det dåligt skickas status 500 med felmeddelande.
    }
}

// Funktionen hämtar alla anteckningar
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await NotesCollection.getAllNotes() 
        res.status(200).json(notes) // Går det bra så raderas anteckningen med status 200.
    } catch (error) {
        res.status(500).json({ message: 'Unable to fetch notes!'}) // Går det dåligt skickas status 500 med felmeddelande.
    }
}
