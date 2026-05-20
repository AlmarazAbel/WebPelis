import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import  {type Movie } from "../data/movies";


const Home = ({ movies, allMovies }: { movies: Movie[]; allMovies: Movie[] }) => {




  const featuredMovie = allMovies.find((m) => m.isFeatured && m.isPublished) || allMovies.find(m => m.isPublished);
//¿Por qué usa allMovies en vez de movies? Porque si el usuario usa el buscador, movies se achica.
//  Si usáramos movies acá, el banner principal de arriba (el Hero) cambiaría o desaparecería mientras escribís.
//  Usar allMovies asegura que el banner de arriba quede fijo y estable.
  return (
    <main className="bg-[#070b17] min-h-screen">
      {/* 1. Hero Principal - Solo se muestra si existe una película */}
      {/* Evalúa si featuredMovie existe (es decir, si la búsqueda anterior encontró algo).
      Si existe, dibuja el componente <Hero /> pasándole
      esa película. Si la base de datos estuviera vacía, muestra el mensaje en pantalla de
      "Cargando cartelera...". */}
     
      {featuredMovie ? (
        <Hero movie={featuredMovie} />
      ) : (
        <div className="h-[40vh] flex items-center justify-center text-gray-500">
          Cargando cartelera...
        </div>
      )}
     
      <section className="px-6 lg:px-20 py-12 space-y-16">
       
        {/* SECCIÓN: ACCIÓN */}
        {/* Método clave: .some(). Este método devuelve un booleano (true o false). Revisa la lista y dice:
        "¿Existe al menos una película en la lista actual que sea de Acción y esté publicada?"*/}


        {movies.some(m => m.category === "Acción" && m.isPublished) && (
          <div id="acción" className="scroll-mt-24 mb-12">
            {/*sirve para que puedas hacer enlaces internos (anclas) desde el menú*/}
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Acción
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
             
             {/*Encadenamiento de métodos (.filter().map()). .filter(): Agarra la lista movies y crea un nuevo array filtrado
              que contiene únicamente las películas que pertenecen a "Acción" y que están publicadas .
              .map(): Toma ese resultado limpio y lo recorre una por una para transformar cada objeto de película en
               un componente visual <MovieCard />
               .key={movie.id}: Es obligatorio en React al usar .map(). Le da un identificador único a cada
               tarjeta para que React sepa exactamente cuál renderizar*/}
              {movies.filter(m => m.category === "Acción" && m.isPublished).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}


        {/* SECCIÓN: COMEDIA */}
        {movies.some(m => m.category === "Comedia" && m.isPublished) && (
          <div id="comedia" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Comedia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Comedia" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}


       
 {/* SECCIÓN: DRAMA */}
        {movies.some(m => m.category === "Drama" && m.isPublished) && (
          <div id="drama" className="scroll-mt-24 mb-12" >
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Drama
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Drama" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}
         {/* SECCIÓN: TERROR */}
        {movies.some(m => m.category === "Terror" && m.isPublished) && (
          <div id="terror" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Terror
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Terror" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}
         {/* SECCIÓN: Ciencia ficción */}
        {movies.some(m => m.category === "Ciencia ficción" && m.isPublished) && (
          <div id="cienciaficción" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Ciencia ficción
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Ciencia ficción" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};


export default Home;
