const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestion des Tâches',
      version: '1.0.0',
      description: 'Documentation de l\'API pour la gestion des tâches',
    },
  },
  apis: ['./routes/*.js'], // Spécifiez ici le chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestion des Tâches',
      version: '1.0.0',
      description: 'Documentation de l\'API pour la gestion des tâches',
    },
  },
  apis: ['./routes/tasks.js'], // Spécifiez ici le chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
