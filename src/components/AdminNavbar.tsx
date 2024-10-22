import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; // Para estilos específicos del navbar

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/admin/citas">Citas</Link>
        </li>
        <li>
          <Link to="/admin/insumos">Insumos</Link>
        </li>
        <li>
          <Link to="/admin/informacion">Información</Link>
        </li>
        <li>
          <Link to="/admin/logout">Cerrar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;

