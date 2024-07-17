import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Mensagens</h1>
        <div className="message">
          <img
            src="https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/409784408_733968548709455_567579893698453370_n.jpg?ccb=11-4&oh=01_Q5AaIO7zziqVQqey227BtAZV3Zh4izQuF2skYS-0BOqTHcik&oe=66A4DB07&_nc_sid=e6ed6c&_nc_cat=106"
            alt=""
          />
          <span>Fernando WA</span>
          <p>Excelente trabalho Rafa!</p>
        </div>
        <div className="message">
          <img
            src="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/402520864_1548769062556457_5620685962468045543_n.jpg?ccb=11-4&oh=01_Q5AaIP3URNxjRdszLwELzwv6jtOVDDNGrtAwPSuE443Aph4S&oe=66A4CEC2&_nc_sid=e6ed6c&_nc_cat=101"
            alt=""
          />
          <span>Mauricio WA</span>
          <p>Bora pra cima Rafa!</p>
        </div>
        <div className="message">
          <img
            src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/424550416_1156670689045324_847120003109728418_n.jpg?ccb=11-4&oh=01_Q5AaIEZt62Il5ciO4LrfgFluz3LIe3ZpG61QB9dv046lRbeP&oe=669E3529&_nc_sid=e6ed6c&_nc_cat=110"
            alt=""
          />
          <span>Raquel WA</span>
          <p>Documentação feita Rafa</p>
        </div>
        <div className="message">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt=""
          />
          <span>Cliente</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt=""
          />
          <span>Cliente</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt=""
          />
          <span>Cliente</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              Cliente
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hora atrás</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
