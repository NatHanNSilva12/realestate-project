import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informação do usuário</h1>
            <Link to="/profile/update">
              <button>Atualizar perfil</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Foto:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Nome do usuário: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Sair</button>
          </div>
          <div className="title">
            <h1>Minha lista</h1>
            <Link to="/add">
              <button>Criar nova postagem</button>
            </Link>
          </div>
          <Suspense fallback={<p>Carregando...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Erro ao carregar os posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Listas salvas</h1>
          </div>
          <Suspense fallback={<p>Carregando...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Erro ao carregar os posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Carregando...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Erro ao carregar os chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data}/>}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
