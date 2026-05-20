import type { Movie } from "../data/movies";


interface Props {
  movie: Movie;
}


const MovieCard = ({ movie }: Props) => {
  return (
    <div className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
     
      {/* IMAGE */}
      <img
  src={movie.image}
  alt={movie.name}
  className="w-full h-[380px] object-cover block" // Agregamos 'block' para forzar el renderizado
  style={{ minWidth: '100%' }}
/>


      {/* CONTENT */}
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold mb-2">
          {movie.name}
        </h3>


        <p className="text-gray-400 text-center">
          {movie.category}
        </p>
        <p className="text-gray-400 text-center">
          {movie.anio}
        </p>


       
      </div>
    </div>
  );
};


export default MovieCard;
