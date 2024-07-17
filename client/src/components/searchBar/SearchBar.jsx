import { useState } from "react";
import "./searchBar.scss";

const types = ["Compra", "Venda"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Compra",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Localização na cidade" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Valor minimo"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Valor máximo"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
