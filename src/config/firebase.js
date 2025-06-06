const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Caminho atualizado

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ecoponto-api-9abf4.firebaseio.com' // Substitua pelo seu ID do projeto
});

const db = admin.firestore();

module.exports = db;