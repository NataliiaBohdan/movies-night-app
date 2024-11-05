function Movie({ movie, onClick }) {
  const title = movie.Title;
  const fixedTitle = title.trim().split(/\s+/);

  const shortenedTitle =
    fixedTitle.length > 5 ? fixedTitle.slice(0, 5).join(" ") + "..." : title;
  return (
    <li onClick={onClick} className="w-64 max-w-64 flex flex-col gap-2 pt-5">
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-full max-w-64 h-96 object-cover"
      />

      <h3 className="text-m font-sm tracking-tighter text-yellow w-62 max-w-62">
        {shortenedTitle}
      </h3>

      <div>
        <p>
          <span>🗓</span>
          <span className="text-white">{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
