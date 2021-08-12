import Gif from "components/Gif";
import Spinner from "components/Spinner";
import useSingleGif from "hook/useSingleGif";
import { Redirect } from "wouter";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Spinner />;
  if (isError) return <Redirect to="404" />;
  if (!gif) return null;

  return (
    <>
      <h3 className="App-title">{gif.titke}</h3>
      <Gif {...gif} />
    </>
  );
}
