import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Movie from "./Movie";
import { useMovies } from "../hook/useMovies";

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const { movies } = useMovies(query);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({ query });
  }, [query, setSearchParams]);

  return (
    <div className="bg-purple flex flex-col items-center justify-center gap-4 w-full h-full pt-24">
      <h2 className="text-white text-xl">Search for your next film to watch</h2>

      <div>
        <input
          className="w-96 border-purple bg-blue-200 border-solid border-2 p-3 focus:outline-none focus:bg-white"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {movies && movies.length > 0 ? (
        <>
          <h3 className="text-2xl pt-16 font-bold text-yellow">
            We found {movies.length} movies for you to choose ➡
          </h3>
          <ul className="flex flex-wrap gap-4 justify-center align-top">
            {movies.map((movie) => (
              <Movie
                key={movie.imdbID}
                movie={movie}
                onClick={() =>
                  navigate(`/movies/${movie.imdbID}?query=${query}`)
                }
              />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-yellow text-regular mt-2">No movies found yet.</p>
      )}
    </div>
  );
}

export default Main;
