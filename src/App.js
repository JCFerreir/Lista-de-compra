import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login.js';
import Main from './components/main.js';
import Cadastro from './components/cadastro.js';
import Lista from './components/lista.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;

