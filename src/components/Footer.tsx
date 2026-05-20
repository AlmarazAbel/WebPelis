import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";


const Footer = () => {
  const categories = ["Acción", "Comedia", "Drama", "Terror", "Ciencia ficción"];


  // Función suave para volver arriba de todo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="w-full bg-[#070b17] border-t border-slate-800 text-gray-400 py-12 mt-auto">
      <div className="w-full px-4 md:px-12 max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
         
          {/* COLUMNA 1: LOGO Y DESCRIPCIÓN */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 no-underline group w-fit">
              <div className="relative">
                <svg width="35" height="35" viewBox="0 0 50 50">
                  <defs>
                    <linearGradient id="gradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#4c1d95', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect width="50" height="50" rx="12" fill="url(#gradFooter)" />
                  <path d="M15 15L35 15L35 35L15 35L15 15Z" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2"/>
                  <path d="M22 18L32 25L22 32V18Z" fill="white" />
                </svg>
              </div>
              <h1 className="text-white text-xl font-black tracking-tighter uppercase italic">
                WEB<span className="text-violet-500">PELIS</span>
              </h1>
            </Link>
            <p className="text-sm text-gray-500 max-w-sm">
              Tu cartelera digital favorita. Descubrí las mejores películas desde nuestra plataforma interactiva de manera rápida y sencilla.
            </p>
          </div>


          {/* COLUMNA 2: ENLACES A CATEGORÍAS */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">Categorías</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm pl-0 list-none">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href={`#${cat.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-amber-500 transition-colors duration-200 no-underline"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* COLUMNA 3: REDES SOCIALES Y BOTÓN ARRIBA */}
          <div className="space-y-4 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-2 w-full md:text-right">
              <h3 className="text-white font-semibold text-lg">Seguinos</h3>
              <div className="flex gap-4 md:justify-end text-xl">
                <a href="#" className="hover:text-violet-500 transition-colors"><FaFacebook /></a>
                <a href="#" className="hover:text-violet-500 transition-colors"><FaTwitter /></a>
                <a href="#" className="hover:text-violet-500 transition-colors"><FaInstagram /></a>
                <a href="#" className="hover:text-violet-500 transition-colors"><FaYoutube /></a>
              </div>
            </div>


            {/* Botón flotante interno para subir */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs bg-slate-800 hover:bg-violet-600 text-white px-3 py-2 rounded-lg transition-all duration-300 group"
            >
              Volver arriba
              <FaArrowUp className="transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>


        </div>


        {/* BARRA INFERIOR DE DERECHOS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>&copy; {new Date().getFullYear()} WEBPELIS. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Términos de Servicio</a>
            <a href="#" className="hover:underline">Política de Privacidad</a>
          </div>
        </div>


      </div>
    </footer>
  );
};


export default Footer;
