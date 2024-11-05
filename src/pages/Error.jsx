import React from "react";

function Error({ error }) {
  const errorMessage =
    error?.data || error?.message || "An unexpected error occurred.";

  return (
    <div className="bg-purple text-white h-screen w-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl">Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <button
        className="border-solid border-2 border-yellow text-yellow py-2 px-4"
        onClick={() => window.history.back()}
      >
        Go back
      </button>
    </div>
  );
}

export default Error;
