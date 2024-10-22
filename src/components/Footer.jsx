import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contacto">
      <p>© 2024 Zotz Barber. Todos los derechos reservados.</p>
      <div className="contact-info">
        <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad, País</p>
        <p><strong>Teléfono:</strong> +1 234 567 890</p>
        <p><strong>Horarios:</strong> Lunes - Sábado: 9:00 AM - 7:00 PM</p>
        <Link to="/admin-login">
          <button className="admin-button">Acceso Administrador</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
