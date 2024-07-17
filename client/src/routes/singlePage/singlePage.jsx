import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Geral</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Serviços de utilidade pública</span>
                <p>O locatário é responsável</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Política para animais de estimação</span>
                <p>Animais de estimação permitidos</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Taxas de propriedade</span>
                <p>Deve ter 3x o aluguel na renda familiar total</p>
              </div>
            </div>
          </div>
          <p className="title">Tamanho</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 m²</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 quartos</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 banheiro</span>
            </div>
          </div>
          <p className="title">Locais próximos</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Escola</span>
                <p>250m de distancia</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Ponto de onibus</span>
                <p>100m de distancia</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurantes e Mercados</span>
                <p>200m de distancia</p>
              </div>
            </div>
          </div>
          <p className="title">Localização</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Enviar uma mensagem
            </button>
            <button>
              <img src="/save.png" alt="" />
              Salvar o imóvel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
