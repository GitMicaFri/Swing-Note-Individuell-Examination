


app.get('/users',(req, res) => {
    res.send('GET request for user')
})

app.post('/users',(req, res) => {
    res.send('POST request with user')
})


app.put('/users',(req, res) => {
    res.send('PUT request to update user')
})

app.delete('/users',(req, res) => {
    res.send('DELETE request to delete user')
})