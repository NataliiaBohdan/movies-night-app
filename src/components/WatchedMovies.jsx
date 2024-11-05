import { useWatchlist } from "../context/WatchlistContext";
import StarRating from "./StarRating";

function WatchedMovies() {
  const { watchedlist } = useWatchlist();
  function handleSetRating(rating) {
    console.log(rating);
  }
  return (
    <div className="w-1/3  bg-yellow p-4 max-h-screen overflow-y-auto">
      <div className="flex justify-between">
        <h3 className="text-purple font-bold text-xl text-center">
          WATCHED MOVIES
        </h3>
        {watchedlist.length ? (
          <h3 className="text-black font-bold text-xl text-center">
            TOTAL: &nbsp; {watchedlist.length} &nbsp;
            {watchedlist.length === 1 ? "film" : "films"}
          </h3>
        ) : null}
      </div>
      <ul className="flex flex-col gap-8">
        {watchedlist.map((movie) => (
          <li key={movie.imdbID} className=" flex  gap-8 pt-5  items-start">
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="w-20 h-22"
            />
            <div className="flex flex-col ">
              <h4 className="text-black font-bold">{movie.Title}</h4>
              <p className="text-black font-semibold pb-6">🎬 {movie.Year}</p>
              <p className="text-black font-semibold">
                Your rate for the movie:
              </p>
              <StarRating
                movieId={movie.imdbID}
                onSetRating={handleSetRating}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchedMovies;
