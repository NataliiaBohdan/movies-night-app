import MovieToWatch from "../components/MoviesToWatch";
import NavBar from "../components/NavBar";
import WatchedMovies from "../components/WatchedMovies";

function MyList() {
  return (
    <div className="min-h-screen w-full flex flex-col p-3 bg-purple">
      <NavBar />
      <div className="flex  w-full pt-8 gap-x-12">
        <MovieToWatch />
        <WatchedMovies />
      </div>
    </div>
  );
}

export default MyList;
