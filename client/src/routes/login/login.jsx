import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Bem vindo de volta</h1>
          <input name="username" type="text" placeholder="Nome do usuário" />
          <input name="password" type="password" placeholder="Senha" />
          <button>Entrar</button>
          <Link to="/register">{"Não"} possui uma conta?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
