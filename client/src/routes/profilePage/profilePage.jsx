import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informação do usuário</h1>
            <button>Atualizar perfil</button>
          </div>
          <div className="info">
            <span>
              Foto:
              <img
                src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/427577191_995690192272639_2835870704666958633_n.jpg?ccb=11-4&oh=01_Q5AaIPUdM2fT8zl4FzaLBJLUSZh0CMC6t_W3Yy0AQcvzkOYr&oe=66A2516B&_nc_sid=e6ed6c&_nc_cat=107"
                alt=""
              />
            </span>
            <span>
              Nome: <b>Rafael Sérgio</b>
            </span>
            <span>
              E-mail: <b>rafaelsergio@wabrokersimoveis.com.br</b>
            </span>
          </div>
          <div className="title">
            <h1>Minha lista</h1>
            <button>Adicionar novo imóvel</button>
          </div>
          <List />
          <div className="title">
            <h1>Listas salvas</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
