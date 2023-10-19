import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl text-center font-bold mb-8">
        Bienvenue sur la Page d'Accueil !
      </h1>
      <Link to="/tasks" className="text-blue-500 hover:underline">
        Voir les Tâches
      </Link>
    </div>
  );
};

export default Home;
