import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarADMIN.css'; // Asegúrate de tener el archivo de estilos

const Navbar: React.FC = () => {
  return (
    <header className="admin-navbar">
      <div className="logo">
        <Link to="/">
          <img src="/images/logobat.png" alt="Zotz Barber Logo" className="logo-img" />
        </Link>
        <span className="logo-text">ZOTZ Admin</span>
      </div>
      <nav className="admin-navbar-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/servicios">Servicios</Link>
        <Link to="/admin/sucursales">Sucursales</Link>
        <Link to="/admin/usuarios">Usuarios</Link>
        <Link to="/admin/configuracion">Configuración</Link>
      </nav>
    </header>
  );
};

export default NavbarADMIN;
