# Lista de Contactos — React + Context API

Aplicación de lista de contactos con operaciones CRUD completas contra una API real: crear, listar, editar y eliminar contactos, con estado global gestionado con Context API + `useReducer` y rutas con React Router.

Ejercicio del bootcamp Full Stack de 4Geeks Academy, completado el 23 de septiembre de 2026. Es el ejercicio más sólido del bootcamp: el único que toca una API real con las cuatro operaciones.

> El nombre del repositorio es el genérico de la plantilla (`react-hello-webapp`); el proyecto que contiene es esta lista de contactos.

## Qué hace

- **Listar contactos** desde la API pública de 4Geeks (`playground.4geeks.com/contact`), en la agenda `mieresantonio`.
- **Crear y editar** contactos (nombre, correo, teléfono, dirección) con el mismo formulario en `/add` y `/edit/:id`.
- **Eliminar** con modal de confirmación que muestra el nombre del contacto antes de borrar.
- **Crear la agenda automáticamente**: si la agenda no existe (la API responde 404), la app la crea vacía y vuelve a cargar.
- **Estados de carga y error**: indicador de "Cargando contactos...", mensaje de error si no hay conexión y mensaje de lista vacía.

## Stack

| Tecnología | Uso |
|-----------|-----|
| React 18.2 | Componentes y hooks |
| React Router 6 | Rutas `/`, `/add`, `/edit/:id` |
| Context API + `useReducer` | Estado global (`store.js`, hook `useGlobalReducer`) |
| Vite 4 | Bundler y servidor de desarrollo |
| Bootstrap 5.3 + Font Awesome | Estilos (por CDN) |
| API REST de 4Geeks | Persistencia de los contactos |

## Cómo correrlo

Requiere Node ≥ 20.

```bash
npm install
npm run start
```

La app abre en `http://localhost:3000` (puerto por defecto de Vite en esta plantilla).

## Estructura

```
src/
├── pages/
│   ├── Contact.jsx       # Lista de contactos (ruta /)
│   └── AddContact.jsx    # Formulario crear/editar (rutas /add y /edit/:id)
├── components/
│   ├── ContactCard.jsx   # Tarjeta de un contacto con editar y borrar
│   ├── ConfirmModal.jsx  # Modal de confirmación antes de eliminar
│   ├── Navbar.jsx        # Barra superior de la plantilla
│   └── Footer.jsx
├── store/
│   ├── contactActions.js # fetch a la API: listar, crear, editar, eliminar
│   └── store.js          # Estado inicial y reducer (contacts, isLoading, errorMsg)
├── hooks/
│   └── useGlobalReducer.jsx
├── routes.jsx            # Definición de rutas
└── main.jsx
```

## Qué demuestra

- CRUD completo contra una API REST real (GET, POST, PUT, DELETE con `fetch`).
- Estado global con Context API + `useReducer`: acciones `set_loading`, `set_contacts` y `set_error`.
- Rutas dinámicas (`/edit/:id`) y navegación programática.
- Manejo de casos reales: agenda inexistente (404), errores de red, lista vacía y confirmación antes de una acción destructiva.

## Notas

- La agenda `mieresantonio` vive en la API pública de práctica de 4Geeks: cualquiera con la URL puede ver sus contactos. Es un entorno de práctica, no un lugar para datos reales.
- El repo incluye `vercel.json`, así que está listo para desplegarse en Vercel con `vercel --prod`.
- Las páginas `/demo` y `/single/:theId` son restos de la plantilla, sin uso en la app.
- Construido sobre la plantilla `react-hello-webapp` de 4Geeks Academy.
