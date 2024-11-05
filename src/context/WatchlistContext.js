import { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    return savedWatchlist || [];
  });
  const [watchedlist, setWatchedlist] = useState(() => {
    const savedWatchedlist = JSON.parse(localStorage.getItem("watchedlist"));
    return savedWatchedlist || [];
  });
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  useEffect(() => {
    localStorage.setItem("watchedlist", JSON.stringify(watchedlist));
  }, [watchedlist]);

  function addToWatchlist(movie) {
    setWatchlist((prevList) => {
      return prevList.some((m) => m.imdbID === movie.imdbID)
        ? prevList
        : [...prevList, movie];
    });
  }
  function addToWatched(movie) {
    setWatchlist((prevList) =>
      prevList.filter((mov) => mov.imdbID !== movie.imdbID)
    );
    setWatchedlist((prevList) =>
      prevList.some((mov) => mov.imdbID === movie.imdbID)
        ? prevList
        : [...prevList, movie]
    );
  }
  function deleteFromWatchList(imdbID) {
    setWatchlist((prevList) =>
      prevList.filter((movie) => movie.imdbID !== imdbID)
    );
  }

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        watchedlist,
        addToWatchlist,
        addToWatched,
        deleteFromWatchList,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}
