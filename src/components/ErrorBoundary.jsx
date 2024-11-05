import React, { useState, useEffect } from "react";
import Error from "../pages/Error";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (error) => {
      setHasError(true);
      setError(error);
    };

    window.addEventListener("error", (e) => handleError(e.error));
    window.addEventListener("unhandledrejection", (e) => handleError(e.reason));

    return () => {
      window.removeEventListener("error", (e) => handleError(e.error));
      window.removeEventListener("unhandledrejection", (e) =>
        handleError(e.reason)
      );
    };
  }, []);

  if (hasError) {
    return <Error error={error} />;
  }

  return children;
}

export default ErrorBoundary;
