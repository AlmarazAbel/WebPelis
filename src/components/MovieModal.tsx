import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { type Movie } from "../data/movies";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (movie: Movie) => void;
  movieToEdit?: Movie | null;
}

const MovieModal = ({ isOpen, onClose, onSave, movieToEdit }: Props) => {
  // Configuración de React Hook Form
  const {
    register,
    handleSubmit,watch,
    reset,
    formState: { errors },
  } = useForm<Omit<Movie, "id">>();
  // <Omit<Movie, "id">> captura todo excepto el id

  // Efecto para cargar datos o limpiar el formulario
  useEffect(() => {
    if (movieToEdit) {//Modo Edición: Si movieToEdit tiene una película adentro, la función reset()
    //  de React Hook Form inyecta todos sus datos directamente en los inputs.
      reset({ ...movieToEdit });
    } else {// si es null limpia todos los campos
      reset({
        name: "",
        category: "Acción",
        description: "",
        image: "",
        
        isPublished: true,
        isFeatured: false,
        stars: 5,
      });
    }
  }, [movieToEdit, isOpen, reset]);

  // Función que se ejecuta al pasar las validaciones
  const onSubmit = (data: Omit<Movie, "id">) => {
    const movieData: Movie = {
      ...data,
      id: movieToEdit?.id || crypto.randomUUID(),
      //“si existe una película para editar, usar su id” de lo contrario crea un id
    };
    onSave(movieData);
    onClose();
  };

  if (!isOpen) return null;
  //Esto significa que el modal directamente no se dibuja en el DOM,
  //  manteniéndose oculto y liberando memoria del navegador.

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#111827] w-full max-w-md rounded-xl border border-gray-800 p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold text-white mb-6">
          {movieToEdit ? "Editar Película" : "Nueva Película"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre */}
          <div>
            <input
              type="text"
              placeholder="Nombre de la película"
              className={`w-full bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-700"} rounded-lg p-2.5 text-white outline-none focus:ring-2 focus:ring-violet-500`}
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Descripción */}
          <div>
            <textarea
            
              placeholder="Descripción"
              className={`w-full bg-gray-800 border ${errors.description ? "border-red-500" : "border-gray-700"} rounded-lg p-2.5 text-white h-24 resize-none outline-none focus:ring-2 focus:ring-violet-500`}
              {...register("description", {
                required: "La descripción es obligatoria",
                maxLength: {
                  value: 400,
                  message: "La descripción debe tener máximo 400 caracteres",
                },
                minLength: {
                  value: 10,
                  message: "La descripción es muy corta",
                },
              })}
            />
{/* Esto va justo después del textarea */}
<p className="text-right text-[10px] text-gray-500">
  {/* Usamos watch de react-hook-form para contar en tiempo real */}
  {watch("description")?.length || 0} / 400
</p>


            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Categoría */}
          <select
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2.5 text-white outline-none focus:ring-2 focus:ring-violet-500"
            {...register("category")}
          >
            <option value="Acción">Acción</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
          </select>

          {/* Año - Con validación numérica */}
          <div>
            <input
              type="number"
              placeholder="Ejemplo : 2026"
              className={`w-full bg-gray-800 border ${errors.anio ? "border-red-500" : "border-gray-700"} rounded-lg p-2.5 text-white outline-none focus:ring-2 focus:ring-violet-500`}
              {...register("anio", {
                required: "El año es obligatorio",
                valueAsNumber: true,
                min: { value: 1888, message: "Año inválido" },
                max: { value: 2027, message: "El año no es válido" },
              })}
            />
            {errors.anio && (
              <p className="text-red-500 text-xs mt-1">{errors.anio.message}</p>
            )}
          </div>

          {/* Imagen */}
          <div>
            <input
              type="text"
              placeholder="URL de la imagen"
              className={`w-full bg-gray-800 border ${errors.image ? "border-red-500" : "border-gray-700"} rounded-lg p-2.5 text-white outline-none focus:ring-2 focus:ring-violet-500`}
              {...register("image", {
                required: "La URL de la imagen es obligatoria",
              })}
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-violet-600"
                {...register("isPublished")}
              />
              Publicado
            </label>

            <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-yellow-500"
                {...register("isFeatured")}
              />
              Destacada ⭐
            </label>
          </div>

          {/* Botones */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2.5 rounded-lg transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-bold py-2.5 rounded-lg transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieModal;
