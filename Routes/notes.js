



app.get('/notes',(req, res) => {
    res.send('GET request for note')
})

app.post('/notes',(req, res) => {
    res.send('POST request with note')
})


app.put('/notes',(req, res) => {
    res.send('PUT request to update note')
})

app.delete('/notes',(req, res) => {
    res.send('DELETE request to delete note')
})