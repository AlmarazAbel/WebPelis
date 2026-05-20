import { useState } from "react";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (value: string) => void;
}
//Comunicación ascendente (de hijo a padre App.tsx).

const NavbarCustom = ({ onSearch }: Props) => {

const [menuOpen, setMenuOpen] = useState(false);
//controla si el menú desplegable en celulares está abierto o cerrado.
const navigate = useNavigate();
const categories = ["Acción", "Comedia", "Drama", "Terror", "Ciencia ficción"];

  return (
    <nav className="bg-[#070b17] border-b border-slate-800 sticky top-0 z-100">
      <div className="w-full px-4 md:px-12">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer no-underline">
          <div className="flex items-center gap-3 group cursor-pointer">
    {/* Icono Esfereográfico / Play */}
    <div className="relative">
      <svg 
        width="45" 
        height="45" 
        viewBox="0 0 50 50" 
        className="transform group-hover:scale-110 transition-transform duration-300"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4c1d95', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="50" height="50" rx="12" fill="url(#grad)" />
        <path 
          d="M15 15L35 15L35 35L15 35L15 15Z" 
          stroke="#fbbf24" 
          strokeWidth="2" 
          strokeDasharray="4 2"
        />
        <path d="M22 18L32 25L22 32V18Z" fill="white" />
      </svg>
    </div>
    
    {/* Texto del Logo */}
    <div className="flex flex-col leading-tight">
      <h1 className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase italic">
        WEB<span className="text-violet-500">PELIS</span>
      </h1>
      <div className="h-1 w-full bg-gradient-to-r from-violet-600 to-amber-500 rounded-full"></div>
    </div>
  </div>
  </Link>
 {/* Termina logo */}

          {/* DESKTOP MENU (Visible desde md: 768px) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-white">
            {categories.map((cat) => (
              <a
    key={cat}
    // Generamos el href dinámicamente: "Acción" -> "#accion"
    //Anclas
    href={`#${cat.toLowerCase().replace(/\s+/g, '')}`} 
    //Sirve para normalizar los enlaces internos. Por ejemplo, la categoría 'Ciencia ficción' tiene un espacio en
    //  el medio. Los enlaces de ancla HTML (href) no deberían llevar espacios
    className="hover:text-amber-600 transition text-sm lg:text-base font-medium cursor-pointer"
  >
    {cat}
  </a>
))}
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center border border-slate-700 hover:border-amber-600 rounded-md overflow-hidden bg-[#111827] transition">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-white px-3 py-2 outline-none w-37.5 lg:w-55 text-sm"
                onChange={(e) => onSearch(e.target.value)}
              />
              <button className="px-3 text-gray-300 hover:text-white">
                <FaSearch />
              </button>
            </div>

            <button onClick={() => navigate("/login")}
            className="flex items-center gap-2 border border-slate-700 hover:border-amber-600 px-4 py-2 rounded-md text-white hover:text-amber-600 transition text-sm">
              <FaUserCircle />
              Login
            </button>
          </div>

          {/* MOBILE BUTTON (Visible hasta 767px) */}
          <button
            className="md:hidden text-white text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col gap-4 text-white border-t border-slate-800 pt-4">
            {categories.map((cat) => (
              <a
    key={cat}
    // Generamos el href dinámicamente: "Acción" -> "#accion"
    href={`#${cat.toLowerCase().replace(/\s+/g, '')}`} 
    className="hover:text-amber-600 transition text-sm lg:text-base font-medium cursor-pointer"
  >
    {cat}
  </a>
            ))}

            <div className="flex items-center border border-slate-700 rounded-md overflow-hidden bg-[#111827] mt-2">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-white px-4 py-2 outline-none w-full"
                 onChange={(e) => onSearch(e.target.value)}
              />
              <button className="px-4 text-gray-300">
                <FaSearch />
              </button>
            </div>

            <button onClick={() => {
        navigate("/login");
        setMenuOpen(false);}}
             className="flex items-center justify-center gap-2 bg-amber-600 px-4 py-3 rounded-md text-white font-bold mt-2">
              <FaUserCircle />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustom;