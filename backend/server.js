const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { swaggerUi, specs } = require('./swagger');

const app = express();

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Connexion à la base de données MongoDB (remplacez 'mongodb://localhost:27017/tasksdb' par votre URI MongoDB)
mongoose.connect('mongodb://localhost:27017/tasksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Vérification de la connexion à MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

// Intégrer Swagger dans votre application
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Définir vos routes ici
app.use('/api', require('./routes/api')); // Exemple de route API

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
