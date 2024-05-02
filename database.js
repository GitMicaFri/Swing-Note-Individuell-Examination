

const Datastore = require('nedb'); // Importerar nedb
const path = require('path'); // Importerar node.js path modul

let db = new Datastore({ // Skapar en ny "store"
  filename: path.join(__dirname, 'notes.db'), // file path
  autoload: true // Databasen laddas om automatiskt
});

module.exports = db; // Exporterar db objektet






