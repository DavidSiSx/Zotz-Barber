import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hub from "./components/Hub";  
import Servicios from "./components/Servicios";
import Login from "./components/Login";  // Asegúrate de importar el componente Login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/admin-login" element={<Login />} />  {/* Añade la ruta de Login */}
      </Routes>
    </Router>
  );
}

export default App;

