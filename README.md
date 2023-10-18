Projet de Gestion des Tâches - Architecture Microservices:

Ce projet de gestion des tâches a été conçu en utilisant l'architecture microservices, permettant une scalabilité flexible et une maintenance aisée des différents composants. Voici un aperçu de l'architecture et des technologies utilisées :

Architecture du Projet :

Frontend :

Le frontend est construit avec React.js et utilise React Router pour gérer la navigation entre les différentes pages.
Deux routes principales sont mises en place : une page d'accueil intuitive et une route générique pour la gestion des tâches.
Les pages sont responsives, assurant une expérience utilisateur cohérente sur différents dispositifs.

Backend :

Le backend est basé sur Node.js et Express.js, fournissant une API robuste pour la gestion des tâches.
Une base de données MongoDB est utilisée pour stocker les données des tâches. MongoDB a été choisi en raison de sa flexibilité et de sa capacité à gérer des données non structurées.
Un conteneur Docker spécifique est configuré pour la base de données, assurant un déploiement facile et cohérent.
Conteneurisation et Orchestration :

Le projet utilise Docker pour la conteneurisation. Deux Dockerfiles distincts sont créés pour le frontend et le backend, encapsulant chaque service dans son propre conteneur.
Docker Compose est utilisé pour orchestrer les conteneurs, permettant un déploiement multi-service cohérent.
Documentation et Tests :

L'API est documentée à l'aide de Swagger, fournissant une interface utilisateur interactive pour explorer les endpoints.
Des tests automatisés sont mis en place à l'aide de Jest et Supertest, garantissant la robustesse et la fiabilité de l'application.
Déploiement et Monitoring :

Le projet est déployé sur un fournisseur cloud (par exemple, AWS, Azure) pour garantir une disponibilité continue.
Prometheus et Grafana sont utilisés pour surveiller en temps réel les conteneurs, offrant des insights précieux sur les performances.

Technologies Utilisées :
Frontend : React.js, React Router
Backend : Node.js, Express.js, MongoDB
Conteneurisation : Docker, Docker Compose
Tests : Jest, Supertest
Documentation : Swagger
Monitoring : Prometheus, Grafana

DIAGRAMME SUR microservices.drawio-1.png 
