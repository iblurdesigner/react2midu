import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hook/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      {/* <br />
    <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
}
