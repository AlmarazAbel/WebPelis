import { useState } from "react";
import {type Movie } from "../data/movies";
import Swal from "sweetalert2";
// 1. Los imports SIEMPRE van arriba de todo, fuera del componente
import MovieModal from "../components/MovieModal";
interface AdminProps {
  movies: Movie[];
  onAddMovie: (newMovie: Movie) => void;
  onDeleteMovie: (id: string) => void;
  onUpdateMovie: (updatedMovie: Movie) => void;
  onLogout: () => void;
}
const Admin = ({ movies, onAddMovie, onDeleteMovie, onUpdateMovie, onLogout }: AdminProps) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 2. Necesitas este estado para saber qué película estás editando
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  

  // 3. Función para guardar (crear o editar)
  const handleSaveMovie = (newMovie: Movie) => {
    if (movieToEdit) {
      onUpdateMovie(newMovie);
      console.log("Editando película con ID:", newMovie.id);
    } else {
      onAddMovie(newMovie);
      console.log("Creando película con ID:", newMovie.id);
    }

    setIsModalOpen(false);
    setMovieToEdit(null);

    Swal.fire({
      title: "¡Logrado!",
      text: "La lista de películas se ha actualizado.",
      icon: "success",
      background: "#111827",
      color: "#fff",
      confirmButtonColor: "#7c3aed"
    });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Sí, eliminar",
      background: "#111827",
      color: "#ffffff"
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteMovie(id);
        Swal.fire({
          title: "Eliminado",
          icon: "success",
          background: "#111827",
          color: "#fff"
        });
      }
    });
  };

  return (
    
    <div className="min-h-screen bg-[#070b17] p-8 pt-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Panel de Administración</h1>
            <p className="text-gray-400 text-sm">Bienvenido, Admin</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setMovieToEdit(null);
                setIsModalOpen(true);
              }}
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-bold transition"
            >
              + Nueva Película
            </button>

            {/* BOTÓN DE CERRAR SESIÓN */}
            <button 
              onClick={onLogout}
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg font-bold transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>

        <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-800">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-800 text-gray-100 uppercase text-sm">
              <tr>
                <th className="p-4">Imagen</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Categoría</th>
                <th className="p-4">Publicado</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {movies.map((movie) => (
                <tr key={movie.id} className="hover:bg-gray-800/50 transition">
                  <td className="p-4">
                    <img src={movie.image} className="w-12 h-16 object-cover rounded shadow-lg" alt={movie.name} />
                  </td>
                  <td className="p-4 font-semibold text-white">{movie.name}</td>
                  <td className="p-4">{movie.category}</td>
                  <td className="p-4">
                    {movie.isPublished ? <span className="text-green-400">✅</span> : <span className="text-red-400">❌</span>}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-4">
                      <button 
                        onClick={() => {
                          setMovieToEdit(movie); // Pasamos la película a editar
                          setIsModalOpen(true);
                        }}
                        className="text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Editar
                      </button>
                      <button 
                        onClick={() => handleDelete(movie.id)}
                        className="text-red-500 hover:text-red-400 font-medium"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. El Modal fuera de la tabla pero dentro del div principal */}
        <MovieModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveMovie} 
          movieToEdit={movieToEdit} 
        />
      </div>
    </div>
  );
};

export default Admin;