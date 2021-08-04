import "./App.css";
import { Link, Route } from "wouter";
import logoGiffy from "./logo_giffy.jpeg";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

export default function App() {
  return (
    <StaticContext.Provider
      value={{ name: "davidflores", suscribeteAlCanal: true }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt="Giffy logo" src={logoGiffy} />
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
