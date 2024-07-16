import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <h1>
        Procure por resultados em: <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Localização</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Localização na cidade"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Tipo</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">Todos</option>
            <option value="buy">Compra</option>
            <option value="rent">Locação</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Propriedade</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">Todos</option>
            <option value="apartment">Apartament</option>
            <option value="house">Casa</option>
            <option value="condo">Chácara</option>
            <option value="land">Sitio</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Preço minimo</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="todos"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Preço máximo</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="todos"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Quartos</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="todos"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
