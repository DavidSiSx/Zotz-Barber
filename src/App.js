import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hub from "./components/Hub";  // Asegúrate de que las rutas de importación sean correctas
import Servicios from "./components/Servicios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;

