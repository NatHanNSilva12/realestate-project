import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Procure por resultados em <b>Cotia/Alphaville</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Localização</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Localização na cidade"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type">
            <option value="">Todos</option>
            <option value="buy">Compra</option>
            <option value="rent">Locação</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Propriedade</label>
          <select name="property" id="property">
            <option value="">Todos</option>
            <option value="apartment">Apartamento</option>
            <option value="house">Casa</option>
            <option value="condo">Condominio</option>
            <option value="land">Chácara/Sitio</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Valor minimo</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Todos"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Valor máximo</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="Todos"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Quartos</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="Todos"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
