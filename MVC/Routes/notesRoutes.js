const express = require('express')
const router = express.Router()
const notesController = require('../Controllers/notesController')

router.post('/', notesController.createNote)

// router.get('/',(req, res) => {
//     res.send('GET request for note')



// router.put('/',(req, res) => {
//     res.send('PUT request to update note')
// })

// router.delete('/',(req, res) => {
//     res.send('DELETE request to delete note')
// })

module.exports = router