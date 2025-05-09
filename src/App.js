import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardOverview from './pages/DashboardOverview/DashboardOverview';


function App() {
  return (
    <div className="app-layout" style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />
      
      <div className="main-content-area" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Header />
        
        <main className="content" style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
          <DashboardOverview />
        </main>
      </div>
    </div>
  );
}

export default App;
