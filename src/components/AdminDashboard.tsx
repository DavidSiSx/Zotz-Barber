import React from 'react';
import AdminNavbar from './AdminNavbar.tsx'; // Asegúrate de que AdminNavbar esté importado correctamente

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <AdminNavbar />  {/* Navbar visible después del login */}
      <div className="admin-content">
        <h1>Panel de Administración</h1>
        <p>Bienvenido al panel de administración. Aquí puedes gestionar las operaciones de la barbería.</p>
        {/* Aquí puedes agregar más componentes o secciones específicas del dashboard */}
      </div>
    </div>
  );
};

export default AdminDashboard;