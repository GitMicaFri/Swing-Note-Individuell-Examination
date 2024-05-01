const express = require('express')
const router = express.Router()


router.get('/',(req, res) => {
    res.send('GET request for note')
})

router.post('/',(req, res) => {
    res.send('POST request with note')
})


router.put('/',(req, res) => {
    res.send('PUT request to update note')
})

router.delete('/',(req, res) => {
    res.send('DELETE request to delete note')
})

module.exports = router;