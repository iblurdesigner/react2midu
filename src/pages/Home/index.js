import { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hook/useGifs";
import TrendingSearches from "components/TrendingSearches";

//const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // navega a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (ev) => {
    setKeyword(ev.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          placeholder="Search a gif here..."
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
          {/* <ul>
            {POPULAR_GIFS.map((popularGif) => (
              <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
