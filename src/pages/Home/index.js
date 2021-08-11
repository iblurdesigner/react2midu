import { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hook/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

//const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      // navega a otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
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
