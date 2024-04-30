// // Declaring the installed framework
// const express = require('express')
// // const bodyParser = require('body-parser')

// let note = [{ id: 1, body: 'We have a text' }, { id: 2, body: 'This is a second text' }];

// // Calling the express and Body-parser
// let app = express();
// // app.use(bodyParser.urlencoded({
// // extended: true
// // }));
// // Installed the ejs and created a file inside the views
// //app.set('view engine', 'ejs');

// //serving static files
// app.use(express.static('public'));
// //we installed the ejs and created a file inside the views
// app.set('view engine', 'ejs');

// //We set up the route for the App. We first use the app.get option.
// app.get('/', function (req, res) {
//   res.render('notes', {
//     note: note
//   });
// });

// //then, we use app.post option.
// app.post("/api/notes", function (req, res) {
// });

// //Handling the delete request

// app.post('/deleteNote/:id', function (req, res) {
//   console.log(req.params.id);
//   const deleteNotes = note.filter(item => item.id != req.params.id);
//   note = deleteNotes;
//   return res.redirect('/');
// });


// // Setting server port. Always at the bottom.
// app.listen(5000, function() {
//     console.log('NoteApp server is running att port 5000...')
// })