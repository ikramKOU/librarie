import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Landing_pg from './components/Land/Landing_pg'



function App() {
  return (
  
	<>

<Routes>
  <Route  path="/" element={<Login />} />
  <Route path="register" element={<Register />} />
  <Route path="lnd_pg" element={<Landing_pg />} />

  <Route path="*" element={<h1>404</h1>} />
</Routes>







  
  </>
  );
}

export default App;
