import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {

  const [error, setError] = useState("");
  



  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = axios.post("http://localhost:8800/api/auth/register", {
        username,
        password,
      });

      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Bem vindo de volta</h1>
          <input name="username" type="text" placeholder="Nome do usuário" />
          <input name="password" type="password" placeholder="Senha" />
          <button>Entrar</button>
          {error && <span>{error}</span>}
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
