import { useWatchlist } from "../context/WatchlistContext";
import LinkButton from "./LinkButton";
import { FaPlay } from "react-icons/fa";

function MoviesToWatch() {
  const { watchlist, addToWatched, deleteFromWatchList } = useWatchlist();

  if (watchlist.length === 0)
    return (
      <p className="w-2/3 p-4 text-white font-semibold">
        Your movie list is empty, add some movies to watch.
      </p>
    );
  return (
    <div className="w-2/3 p-4 max-h-screen overflow-y-auto">
      <h3 className="text-yellow font-bold text-xl text-center mb-8">
        MOVIES TO WATCH
      </h3>
      <ul className="flex flex-wrap gap-4 justify-start align-top">
        {watchlist.map((movie) => (
          <li key={movie.imdbID} className=" flex  gap-6 pt-5  items-start">
            <div className="relative w-[240px] h-[280px]">
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="w-full h-full"
              />
              <button
                className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50"
                aria-label="Play"
              >
                <FaPlay size={30} />
              </button>
            </div>
            <div className="flex flex-col w-2/4 gap-2">
              <h4 className="text-yellow font-bold">{movie.Title}</h4>
              <p className="text-yellow font-semibold">🎬 {movie.Year}</p>

              <p className="text-white text-sm">{movie.Plot}</p>
            </div>
            <div className="w-1/4 flex flex-col gap-2">
              <LinkButton
                onClick={() => addToWatched(movie)}
                className="inline-block  text-black bg-yellow py-2 px-2 font-bold text-center hover:bg-amber-500 active:bg-amber-600"
              >
                Add to watched
              </LinkButton>
              <LinkButton
                onClick={() => deleteFromWatchList(movie.imdbID)}
                className="inline-block  text-white border border-solid border-yellow py-2 px-2 font-bold text-center hover:border-slate-300 active:border-slate-400"
              >
                Delete
              </LinkButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesToWatch;
