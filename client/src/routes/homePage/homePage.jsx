import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Encontre seu imóvel dos sonhos com um profissional do mercado imobiliário!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>+3 Anos</h1>
              <h2>de vendas de imóveis</h2>
            </div>
            <div className="box">
              <h1>Marketing</h1>
              <h2>Marketing personalizado</h2>
            </div>
            <div className="box">
              <h1>Diversos</h1>
              <h2>Clientes satisfeitos e sonhos realizados</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
