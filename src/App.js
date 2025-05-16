import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './pages/User/UserList';
import UserAdd from './pages/User/UserAdd';
import UserEdit from './pages/User/UserEdit';
import StudentList from './pages/StudentList/StudentList'; // import
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardOverview from './pages/DashboardOverview/DashboardOverview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AuthPage from './pages/AuthPage/Authpage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // gestion sidebar

  return (
    <Router>
    <div className="app-layout" style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <div className="main-content-area" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header avec décalage */}
        <Header isSidebarOpen={isSidebarOpen} />

        {/* Contenu principal */}
        <main
          className="content"
          style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            marginTop: '70px',
            marginLeft: isSidebarOpen ? '250px' : '0',
            transition: 'margin-left 0.3s ease',
          }}
        >
           <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/utilisateurs" element={<UserList />} />
              <Route path="/etudiants" element={<StudentList />} /> 
              <Route path="/users/add" element={<UserAdd />} />
              <Route path="/users/edit/:id" element={<UserEdit />} />
            {/* <Route path='/auth' element={<AuthPage/>} /> */}
            </Routes>
        </main>
      </div>
    </div>
    </Router>
  );
}

export default App;
