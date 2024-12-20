import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Dashboard from './pages/HR/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Login */}
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
