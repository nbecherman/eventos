import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, logout }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Eventos</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/events">Eventos</Link></li>
          {user ? (
            <>
              <li><Link to="/create-event">Crear Evento</Link></li> {/* Enlace de crear evento */}
              <li onClick={logout}>Cerrar Sesión</li>
              <li>{user.username}</li>
            </>
          ) : (
            <>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/register">Registrarse</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
