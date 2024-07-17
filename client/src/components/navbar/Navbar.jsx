import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Rafael Sérgio Corretor</span>
        </a>
        <a href="/">Inicio</a>
        <a href="/">Sobre</a>
        <a href="/">Contato</a>
        <a href="/">Parceiros</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/427577191_995690192272639_2835870704666958633_n.jpg?ccb=11-4&oh=01_Q5AaIPUdM2fT8zl4FzaLBJLUSZh0CMC6t_W3Yy0AQcvzkOYr&oe=66A2516B&_nc_sid=e6ed6c&_nc_cat=107"
              alt=""
            />
            <span>Rafael Sérgio</span>
            <Link to="/profile" className="profile">
              <span>Perfil</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Entrar</a>
            <a href="/" className="register">
              Registrar
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Inicio</a>
          <a href="/">Sobre</a>
          <a href="/">Contato</a>
          <a href="/">Parceiros</a>
          <a href="/">Entrar</a>
          <a href="/">Registrar</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
