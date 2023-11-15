import { useGlobalContext } from "../hooks/useGlobalContext";
import MovieList from "./MovieList";
import Search from "./Search";

function Home() {
  const { isPending } = useGlobalContext();
  return (
    <>
      {isPending && (
        <div className="loader">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <Search />
      <MovieList />
    </>
  );
}

export default Home;
