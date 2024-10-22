<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hub from "./components/Hub";  // Asegúrate de que las rutas de importación sean correctas
import Servicios from "./components/Servicios";
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard'; // Importar el componente de AdminDashboard correctamente
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Hub />} />
        <Route path="/servicios" element={<Servicios />} />
=======
        <Route path="/" element={<Login />} />
        <Route path="./components/AdminDashboard.tsx" element={<AdminDashboard />} /> {/* Aquí va la ruta a la que redirigirás */}
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;

