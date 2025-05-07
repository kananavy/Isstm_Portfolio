/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


// Dans App.js ou un autre composant parent
// src/App.js
import React,{ useState } from './App';
import './App.css';
import {App} from './App';
import Sidebar from './components/HomePage/Sidebar';
import Header from './components/HomePage/Header';
import DashboardOverview from './components/HomePage/DashboardOverview';
import './App.css'; // Fichier CSS pour la mise en page globale

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="content">
          {/* Ici, on pourrait utiliser react-router-dom pour afficher
              différents composants en fonction de l'URL ou du clic sidebar.
              Pour cet exemple, on affiche directement DashboardOverview. */}
          <DashboardOverview />
        </main>
      </div>
    </div>
  );
}

export default App;





/*function Authpage() {
  // Pour l'instant, ce composant App rend simplement la page d'authentification.
  // Dans une application plus complexe, vous pourriez avoir ici :
  // - Du routage (avec React Router DOM) pour afficher différentes pages
  // - Des en-têtes, pieds de page ou barres de navigation communs
  // - La gestion de l'état global de l'application (avec Context API ou Redux)

  return (
    <div className="App">
      {/* Affiche le composant Au}*/
      <AuthPage />

      {/* Exemple : Vous pourriez ajouter d'autres éléments ici à l'avenir */}
      {/* <header>Mon En-tête</header> */}
      {/* <main> */}
      {/* <AuthPage /> */}
      {/* </main> */}
      {/* <footer>Mon Pied de Page</footer> */}
    /* </div>
  );
}
export default App;


import React from 'react';
import Sidebar from './components/home/Sidebar';
import Header from './components/home/Header';
import DashboardOverview from './components/home/DashboardOverview';
import './App.css'; // Fichier CSS pour la mise en page globale

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="content">
          { Ici, on pourrait utiliser react-router-dom pour afficher
              différents composants en fonction de l'URL ou du clic sidebar.
              Pour cet exemple, on affiche directement DashboardOverview. *
          <DashboardOverview />*/
       /* </main>
      </div>
    </div>
  );
}

export default App;*/

