//Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

// Each route can have one or more handler functions, which are executed when the route is matched.

// Route definition takes the following structure:

// app.METHOD(PATH, HANDLER)
// Where:

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

// CRUD application:

// GET method route -get all data
app.get('/',(req, res) => {
    res.send('GET request to the homepage')
})





// PUT method route - edit/update data
app.put('/',(req, res) => {
    res.send('PUT request to the homepage')
})

// DELETE method route -delete data
app.DELETE('/',(req, res) => {
    res.send('DELETE request to the homepage')
})