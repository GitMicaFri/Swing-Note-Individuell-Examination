// Startar databasen, men är inte den faktiska databasen

const Datastore = require('nedb'); // Importerar nedb
const path = require('path'); // Importerar node.js path modul

let DB = new Datastore({ // Skapar en ny "store"
  filename: path.join(__dirname, 'notes.db'), // file path
  autoload: true // Databasen laddas om automatiskt
});

module.exports = DB; // Exporterar db objektet






