import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if(currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Rafael Sérgio Corretor Imobiliário</span>
        </a>
        <a href="/">Inicio</a>
        <a href="/">Sobre</a>
        <a href="/">Contato</a>
        <a href="/">Parceiros</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Perfil</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Entrar</a>
            <a href="/register" className="register">
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
