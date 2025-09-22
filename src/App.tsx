import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from './components/ChatBot';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HeroPage from './pages/HeroPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;