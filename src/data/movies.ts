export interface Movie {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  anio: number;
  isFeatured: boolean;
  stars: number;
  isPublished: boolean;
}


// También debe decir "export const"
export const initialMovies: Movie[] = [
  {
    id: typeof crypto.randomUUID !== 'undefined'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    name: "Rápidos y Furiosos X",
    category: "Acción",
    description: "Dom Toretto y su familia se enfrentan a su oponente más letal hasta ahora.",
    image:"https://wallpapercave.com/wp/wp5492994.jpg",
    anio:2026,
   
    isFeatured: true,
    stars: 8.5,
    isPublished: true
 
   
  },
  {
    id: typeof crypto.randomUUID !== 'undefined'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    name: "Click: Perdiendo el control",
    category: "Comedia",
    description: "es un arquitecto que trabaja demasiado, pero un día, consigue un control remoto universal que le permite adelantar, retrasar y detener el mundo que lo rodea",
    image:"https://wallpapercave.com/wp/wp2102420.jpg",
    anio:2006,
   
    isFeatured: true,
    stars: 9,
    isPublished: true
  },
   {
    id: typeof crypto.randomUUID !== 'undefined'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    name: "Rápidos y Furiosos X",
    category: "Ciencia ficción",
    description: "Proyecto fin del mundo",
    image:"https://wallpapercave.com/uwp/uwp5028001.jpeg",
    anio:2026,
   
    isFeatured: true,
    stars: 10,
    isPublished: true
  },{
    id: typeof crypto.randomUUID !== 'undefined'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    name: "The boys",
    category: "Acción",
    description: "La serie se desarrolla en un universo donde los superhéroes encarnan el lado sombrío de la fama y el estrellato.",
    image:"https://wallpapercave.com/wp/wp14789833.webp",
    anio:2026,
   
    isFeatured: true,
    stars: 7,
    isPublished: true
  },
  {
    id: typeof crypto.randomUUID !== 'undefined'
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    name: "Intruso en Harvard",
    category: "Comedia",
    description: "Monty Kessler estaba lleno de orgullo personal. Había cursado sus estudios en Harvard, recientemente había finalizado su tesis de graduación y solo deseaba alcanzar el éxito en su vida. Sin embargo, un día, de manera fortuita, las cerca de cien páginas de su importante trabajo terminaron en posesión de un indigente",
    image:"https://wallpapercave.com/wp/wp7392455.jpg",
    anio:1994,
   
    isFeatured: true,
    stars: 6,
    isPublished: true
  }
  // ... resto de tus películas
];


export const saveMoviesToStorage = (movies: Movie[]): void => {
  localStorage.setItem("movies", JSON.stringify(movies));
  //movie es el nombre con el cual se guarda los datos , JSON.sr.... es el valor
  //localStorage solo puede guardar texto.Pero movies es un arreglo
  //JSON.stringify()convierte el arreglo en texto JSON.
};


// leer las películas guardadas en localStorage y si no hay ninguna guardada:crear datos iniciales
export const getMoviesFromStorage = (): Movie[] => {
  const storedMovies = localStorage.getItem("movies");
  //sin no hay peliculas guardadas
  if (!storedMovies) {
    //guardar pelis iniciales
    localStorage.setItem("movies", JSON.stringify(initialMovies));
    return initialMovies;
  }
 
  return JSON.parse(storedMovies);
  //Convierte texto JSON nuevamente en un arreglo/objeto real.
};
