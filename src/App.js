import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import MyList from "../src/pages/MyList";
import ErrorBoundary from "./components/ErrorBoundary";
import { WatchlistProvider } from "./context/WatchlistContext";
import Error from "./pages/Error";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <WatchlistProvider>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route
            path="*"
            element={<Error error={{ message: "Page not found" }} />}
          />
        </Routes>
      </ErrorBoundary>
    </WatchlistProvider>
  );
}

export default App;
