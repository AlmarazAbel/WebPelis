// src/App.tsx
import { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarCustom from "./components/NavBar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Pagina404 from "./pages/Pagina404";
import Footer from "./components/Footer";
import { saveMoviesToStorage } from "./data/movies";
import { getMoviesFromStorage, type Movie } from "./data/movies";

const App = () => {

//Lazy Initialization (Inicialización perezosa).
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuth") === "true";
  });//"Porque en localStorage solo se pueden guardar textos (strings). No podemos guardar el 
  // booleano true directamente, por eso guardamos la palabra "true" y acá verificamos si coincide."

  // guarda el array completo de películas (cargándolas desde el storage gracias a getMoviesFromStorage()). 
  // searchTerm guarda el texto que el usuario escribe en el buscador del menú.
  const [movies, setMovies] = useState<Movie[]>(() => {
    return getMoviesFromStorage(); 
  });
  const [searchTerm, setSearchTerm] = useState("");

  //Funciones que cambian el estado y actualizan el localStorage en paralelo para que la sesión se mantenga 
  // o se destruya si el usuario sale de la app.

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };



  // 🛠️ CONTROLADORES GLOBALES DE PELÍCULAS
  const handleAddMovie = (newMovie: Movie) => {

    setMovies((prevMovies) => {
      let updated = [...prevMovies];//se crea una copia del array anterior
      //Verifica si la nueva película viene marcada como destacada
      if (newMovie.isFeatured) {
        //Recorre todas las películas existentes.A cada una le pone:False ,asi solo 1 peli queda destacada
        updated = updated.map(m => ({ ...m, isFeatured: false }));
      }
      return [...updated, newMovie];//Devuelve un nuevo arreglo.Incluye:todas las películas ant.más la nueva 
    });
  };

  const handleDeleteMovie = (id: string) => {
  setMovies((prevMovies) => prevMovies.filter(movie => movie.id !== id));
  //prevMovies representa las películas actuales.
    //.filter(). Crea un nuevo array que incluye a todas las películas menos 
    // a la que coincide con el id que queremos borrar.
  };

  const handleUpdateMovie = (updatedMovie: Movie) => {
    setMovies((prevMovies) => {
      let updated = [...prevMovies];
      if (updatedMovie.isFeatured) {
        updated = updated.map(m => ({ ...m, isFeatured: false }));
      }
    
      return updated.map(movie => movie.id === updatedMovie.id ? updatedMovie : movie);
       //.map(). Recorre la lista de películas  
      //Acá se reemplaza la película vieja por la nueva.
      //si esta es la peli a actualizar entonces usar updatemovie sino dejar la peli original
     
    });
  };
   
  const allMovies = movies; // La lista total del storage
  // Lógica de filtrado en tiempo real
  const filteredMovies = movies.filter(movie => 
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    //Recorre todas las películas y devuelve solo las que cumplan una condición.
    //searchTerm.toLowerCase() Convierte el texto escrito por el usuario a minúsculas.
    //includes compara
  );

  useEffect(() => {
  saveMoviesToStorage(movies);
}, [movies]);
//cada vez que agregamos, editamos o borramos una película (es decir, cada vez que cambia el estado movies),
//  este efecto se dispara solo y guarda la lista actualizada en el localStorage.

  return (
    <BrowserRouter>
      {/* le pasamos la función setSearchTerm para que pueda modificar la búsqueda desde el input del menú */}
      <NavbarCustom onSearch={setSearchTerm} /> 
      
      <Routes>
        {/* Pasamos las películas filtradas al Home */}
        <Route path="/" element={<Home movies={filteredMovies} allMovies={allMovies} />} />

        <Route 
          path="/login" 
          element={!isAuth ? <Login onLogin={handleLogin} /> : <Navigate to="/admin" />} 
        /> //sino esta logeado pag. login de lo contrario renderiza a pagina administrador
        
       <Route 
          path="/admin" 
          element={
            isAuth ? (
              <Admin 
                movies={movies}
                onAddMovie={handleAddMovie}
                onDeleteMovie={handleDeleteMovie}
                onUpdateMovie={handleUpdateMovie}
                onLogout={handleLogout} 
              /> 
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        <Route path="*" element={<Pagina404 />} />
        //son rutas que no existe renderiza al pag error
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;