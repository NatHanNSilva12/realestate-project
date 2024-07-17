import "./newPostPage.scss";

function NewPostPage() {
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Adicionar novo imóvel</h1>
        <div className="wrapper">
          <form>
            <div className="item">
              <label htmlFor="title">Titulo</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Valor</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Endereço</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Descrição</label>
            </div>
            <div className="item">
              <label htmlFor="city">Cidade</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Quantidade de quartos</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Quantidade de banheiros</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Tipo</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Locação
                </option>
                <option value="buy">Compra</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Propriedade</label>
              <select name="property">
                <option value="apartment">Apartamento</option>
                <option value="house">Casa</option>
                <option value="condo">Condominio</option>
                <option value="land">Chácara/Sitio</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Política de Serviços Públicos</label>
              <select name="utilities">
                <option value="owner">Proprietário é responsável</option>
                <option value="tenant">O inquilino é responsável</option>
                <option value="shared">Compartilhado</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Política para animais de estimação</label>
              <select name="pet">
                <option value="allowed">Permitido</option>
                <option value="not-allowed">Não é permitido</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Política de Renda</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Política de Renda"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Tamanho total (m²)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">Escolas</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Onibus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurantes</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Adicionar</button>
          </form>
        </div>
      </div>
      <div className="sideContainer"></div>
    </div>
  );
}

export default NewPostPage;
