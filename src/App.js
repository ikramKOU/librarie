import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css' 
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Landing_pg from './components/landing_page/Landing_pg';
import Edit from './components/Ed_profil/Edit';
import Profil from './components/Profil_card/Profil';
import Dashboard from './components/Dashboard_1/Dashboard.jsx';



function App() {
 
  return (
  
	<>

<Routes>
  <Route  path="/" element={<Login />} />
  <Route path="register" element={<Register />} />
  <Route path="lnd_pg" element={<Landing_pg />} />
  <Route path="edit" element={<Edit />} />
  <Route path="profil_card" element={<Profil />} />
  <Route path="dashboard" element={<Dashboard />} />



  <Route path="*" element={<h1>404</h1>} />
</Routes>







  
  </>
  );
}

export default App;
