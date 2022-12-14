/** @format */
import MovieThumbnail from "./MovieThumbnail";

function Movies({ results, title }) {
  return (
    <section className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="relative flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2" >
        {results.map((result) => (
           <MovieThumbnail key={result.id} result={result} />
        ))}
        
      </div>
    </section>
  );
}

export default Movies;
