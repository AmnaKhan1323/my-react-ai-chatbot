import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Chatbot from './components/Chatbot';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Hardcoded credentials for simplicity
    if (username === 'user123' && password === 'pass123') {
      setLoggedIn(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/chatbot"
          element={isLoggedIn ? <Chatbot /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
