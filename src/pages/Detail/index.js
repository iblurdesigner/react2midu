import Gif from "../../components/Gif";
import useGlobalGifs from "../../hook/useGlobalGifs";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  console.log(gif);

  return <Gif {...gif} />;
}
