# Gatogram — Instagram-like clone (React + Vite)

Proyecto: clon visual inspirado en Instagram que consume imágenes de gatos desde la API pública de Cataas.

Instalación
- Ejecutar:

```bash
npm install
npm run dev
```

Estructura principal
- `src/components/` — Componentes reutilizables: `Header`, `Feed`, `Post`, `PostModal`, `Profile`, `Sidebar`.
- `src/services/api.js` — Lógica para consumir la API de Cataas usando `axios`.
- `src/data/user.js` — Datos simulados del usuario (perfil).
- `src/index.css` — Estilos globales y layout.
- `src/App.jsx` — Enrutamiento y orquestación de datos.

Puntos importantes
- Consumo de API: `axios` + `useEffect` en `App.jsx` mediante `fetchCats` en `src/services/api.js`.
- Estado: `useState` usado para posts, loading y `selected` (publicación activa / modal).
- Props: Los componentes reciben datos via `props` (por ejemplo `Feed` recibe `posts` y `onOpen`).
- Componentización: cada componente tiene responsabilidad clara y estilos propios en su carpeta.
- Interacciones: likes (en `Post`), abrir/cerrar modal (en `App`/`PostModal`), navegación entre Feed y Profile (React Router).

Notas sobre diseño
- Estética inspirada en layouts de Instagram (Header fijo, feed en columna, perfil con grid de imágenes). Se usó CSS puro y fuentes modernas.
- Responsive: diseño adaptado para pantallas pequeñas con reglas en `index.css`.

API usada
- https://cataas.com — se solicita `/api/cats?limit=N` para obtener IDs y construir las URLs de imagen.

Consideraciones
- No se usa backend ni Firebase. Todo es front-end con datos simulados para el perfil.
- No se usa TypeScript ni Redux.

Si quieres que:
- agregue paginación o carga infinita,
- mejore la fidelidad visual con iconografía y animaciones CSS,
- o incluya pruebas unitarias,

dime y lo agrego.
"# Tp6Efsi_Turquie" 
