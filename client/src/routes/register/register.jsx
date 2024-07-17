import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try{
    const res = await axios.post("http://localhost:8800/api/auth/register",{
      username, email, password
    })

    navigate("/login")

  }catch(err){
    setError(err.response.data.message)
  }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form action={handleSubmit}>
          <h1>Criar uma conta</h1>
          <input name="username" type="text" placeholder="Nome do usuário" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Senha" />
          <button >Registrar</button>
          {error && <span>{error}</span>}
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
