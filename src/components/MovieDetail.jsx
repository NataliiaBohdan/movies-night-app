import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import LinkButton from "./LinkButton";
import { useWatchlist } from "../context/WatchlistContext";

const KEY = "ef5bebce";

function MovieDetailPage() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { addToWatchlist } = useWatchlist();
  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=${KEY}`,
          {
            signal: controller.signal,
          }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error(data.Error);

        setMovie(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();

    return () => {
      controller.abort();
    };
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Movie is loading...</p>;

  return (
    <div className="flex w-2/3 gap-4 text-white">
      <div className="relative w-[400px] h-[340px]">
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="w-full object-cover min-w-full min-h-full h-full"
        />
        <button
          className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50"
          aria-label="Play"
        >
          <FaPlay size={30} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-yellow ">{movie.Title}</h1>
        <div className="flex gap-4">
          <p className="font-bold text-xl pb-6">🎬 {movie.Year}</p>
          {movie.imdbRating === "N/A" ? null : (
            <p className="font-bold text-xl"> ⭐️{movie.imdbRating}</p>
          )}
        </div>
        <p className="font-bold">{movie.Actors}</p>

        <p className="text-sm pb-6">{movie.Plot}</p>
        <div className="flex gap-6">
          {movie && (
            <LinkButton
              to="/mylist"
              className="text-black bg-yellow w-max font-bold border-2 border-solid border-yellow inline-block px-4 py-2 hover:bg-amber-500 active:bg-amber-600"
              onClick={() => {
                addToWatchlist(movie);
              }}
            >
              Add to watch
            </LinkButton>
          )}
          <LinkButton
            to={`/?query=${new URLSearchParams(window.location.search).get(
              "query"
            )}`}
            className="text-white w-max font-bold border-2 border-solid border-white inline-block px-4 py-2 hover:border-slate-300 active:border-slate-400"
          >
            Return back
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
