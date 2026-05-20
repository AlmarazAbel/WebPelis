# WebPelículas

Aplicación web de películas tipo streaming desarrollada con React, TypeScript y Vite como proyecto integrador.

## Descripción

WebPelículas permite visualizar un catálogo de películas, navegar por categorías, buscar contenido y administrar películas desde un panel privado. La persistencia de datos se simula mediante LocalStorage, sin utilizar backend.

## Funcionalidades

- Catálogo principal de películas.
- Hero con película destacada.
- Secciones por categoría.
- Buscador de películas.
- Login de administrador.
- Panel de administración.
- Alta, edición y eliminación de películas.
- Gestión de película destacada.
- Persistencia con LocalStorage.
- Diseño responsive.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- React Hook Form
- Tailwind CSS
- SweetAlert2
- React Icons
- LocalStorage

## Instalación y ejecución

git clone https://github.com/AlmarazAbel/ProyectoPeliculas.git

cd ProyectoPeliculas

npm install

npm run dev

Luego abrir:

http://localhost:5173/

## Scripts disponibles

npm run dev

Ejecuta el proyecto en modo desarrollo.

npm run build

Genera la versión optimizada para producción.

npm run preview

Permite previsualizar el build de producción.

## Rutas principales

- `/` - Catálogo principal.
- `/login` - Login administrador.
- `/admin` - Panel de administración.
- `/pagina404` - Panel de error/no encontrada.

## Credenciales de prueba

Usuario: admin

Contraseña: admin

## Estructura principal

src/
├── components/
│   ├── Hero.tsx
│   ├── MovieCard.tsx
│   ├── MovieModal.tsx
│   └── NavBar.tsx
├── data/
│   └── movies.ts
├── pages/
│   ├── Admin.tsx
│   ├── Home.tsx
│   └── Login.tsx
│   └── Pagina404.tsx
├── App.tsx
├── main.tsx
└── index.css

## Persistencia de datos

El proyecto utiliza LocalStorage para simular una base de datos local. Las películas se guardan bajo la clave `movies`, mientras que la autenticación del administrador se almacena mediante la clave `isAuth`.

## Integrantes

- Guadalupe Pereyra
- Jesús Almaraz
