// Login.jsx
import React from "react";
import "./Login.css"; // Asegúrate de crear este archivo CSS para estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión - Administradores</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" />
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
