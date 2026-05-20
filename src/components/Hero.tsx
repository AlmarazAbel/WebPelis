import type { Movie } from "../data/movies";

interface HeroProps {
  movie: Movie;
}

const Hero = ({ movie }: HeroProps) => {
  
    if (!movie) return null; 
    //Al poner if (!movie) return null;, el componente frena 
    // a tiempo y devuelve "nada" de forma segura sin romper el sitio.

  return (
    <section
   
      className="relative min-h-[80vh] lg:h-[85vh] flex items-center bg-cover bg-center transition-all duration-500"
      style={{
        //se usa style Porque la imagen del fondo es dinámica y cambia según la película destacada guardada en
        //  la base de datos o el storage. Tailwind maneja clases estáticas
        backgroundImage: `url(${movie.image})`, // Sin las comillas simples internas
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#070b17] via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 lg:px-20">
        <div className="max-w-2xl text-white">
          <p className="text-amber-700 text-sm lg:text-base uppercase tracking-widest mb-3 font-medium">
            Película destacada
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
            {movie.name} {/* Nombre dinámico */}
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg">
            {movie.description} {/* Descripción dinámica */}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-violet-600 hover:bg-violet-700 transition px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
              ▶ Ver ahora
            </button>

            <button className="border border-gray-400 backdrop-blur-sm hover:bg-white hover:text-black transition px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
              Más información
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;
