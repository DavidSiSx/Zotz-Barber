import React from "react";
import { useNavigate } from "react-router-dom"; // Hook para redirección
import "./Login.css"; // Tu archivo de estilos

const Login = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirige directamente al dashboard
    navigate('./AdminDashboard.tsx'); // Cambia la ruta si tienes otro destino
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión - Administradores</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

