const express = require('express')
const router = express.Router()


// router.get('/',(req, res) => {
//     res.send('GET request for user')
// })

// Från PedroTech:
router.get('/all',(req, res) => {
    const user = user.findAll().exec()
    res.json(userList)
})

// Från PedroTech:
router.get('/byId/:id',(req, res) => {
    const user = user.findById(req.params.id).exec()
    res.json(user)
})

// router.post('/',(req, res) => {
//     res.send('POST request with user')
// })

// Från PedroTech
router.post('/create',(req, res) => {
    const user = req.body;
    user.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
    res.json(req.body);
})


router.put('/',(req, res) => {
    res.send('PUT request to update user')
})

router.delete('/',(req, res) => {
    res.send('DELETE request to delete user')
})

module.exports = router;