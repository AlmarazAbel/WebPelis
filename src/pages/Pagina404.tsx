import { useNavigate } from "react-router-dom";


const Pagina404 = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-[#070b17] flex flex-col items-center justify-center p-4 text-white">
      <div className="text-center space-y-6 max-w-md">
        {/* Número grande de error */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse">
          404
        </h1>
       
        {/* Mensaje principal */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Película no encontrada
        </h2>
       
        {/* Descripción corta */}
        <p className="text-gray-400 text-base">
          Lo sentimos, la página que estás buscando no existe o fue movida al archivo de administración.
        </p>


        {/* Botón de retorno */}
        <div className="pt-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-violet-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Volver a la Cartelera
          </button>
        </div>
      </div>
    </div>
  );
};


export default Pagina404;
