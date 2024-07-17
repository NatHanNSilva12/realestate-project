import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>Criar uma conta</h1>
          <input name="username" type="text" placeholder="Nome do usuário" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Senha" />
          <button >Registrar</button>
          <Link to="/login">Já possui uma conta?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
