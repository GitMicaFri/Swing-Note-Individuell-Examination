const express = require('express')  // Importerar expressJS
const router = express.Router() // Skapar nytt router-objekt
const notesController = require('../Controllers/notesController') // Importerar notesController från angiven path


router.post('/', notesController.createNote) // Router för post request till notesController, skapa anteckning

router.get('/', notesController.getAllNotes) // Router för get request till notesController, hämta alla anteckningar

router.put('/:id', notesController.updateNote) // Router för put request till notesController, till specifikt id att uppdatera

router.delete('/:id', notesController.deleteNote) // Router för put request till notesController, till specifikt id att radera



module.exports = router // Exporterar routerobjektet så att det kan användas på annan plats