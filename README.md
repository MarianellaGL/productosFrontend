# 🧾 Inventario App

Inventario App es una aplicación web desarrollada en React + Chakra UI v3, creada para administrar productos dentro de un inventario de forma moderna, responsiva y fácil de usar.

Permite listar, filtrar, agregar, editar y eliminar productos con una interfaz clara basada en componentes reutilizables.

## 🚀 Características principales

- 📦 Listado dinámico de productos con categorías y filtros.

- 💡 Drawer de detalle (modal en desktop / navegación en mobile).

- ✏️ Edición de productos con formulario modal.

- ❌ Eliminación dinámica por ID o nombre, con confirmación.

- 📱 Diseño 100% responsivo (tabla en desktop, cards en mobile).

- 🧠 Contextos globales y reducers para manejo de estado.

- 🧩 Arquitectura limpia con separación de responsabilidades.


    🔗 Estructura preparada para conectar con una API real.

🧩 Tecnologías utilizadas

- Tipo Tecnología
- Framework React 18 + Vite
- UI Library Chakra UI v3 (Ark + Radix)
- Routing React Router DOM v6
- Estado Global React Context + useReducer
- Iconografía Lucide React / React Icons
- Formateo de datos Intl.NumberFormat (ARS)

`src/`  
`├── components/` \
`│   ├── Layout.jsx` \
`│   ├── NavButton.jsx`\
`│   ├── ProductsTable.jsx`\
`│   ├── ProductsTableDesktop.jsx`\
`│   ├── ProductsTableMobile.jsx` \
`│   ├── EditProductModal.jsx` \
`│   ├── FilterDrawer.jsx` \
`│   └── ProductDetailDrawer.jsx` \
`│` \
`├── context/` \
`│    ├── reducers/` \
`│          ├── productsReducer.js`\
`│          └── detailReducer.js` \
`│   ├── ProductsContext.jsx` \
`│   └── ProductDetailContext.jsx` \
`│` \
`├── hooks/` \
`│   ├── useHome.js` \
`│   └── UseResponsive.js` \
`│` \
`├── pages/` \
`│   ├── Home/` \
`│   │   ├── Home.jsx`\
`│   │   └── Components/`\
`│   ├── ProductsEditPage.jsx` \
`│   ├── ProductsDeletePage.jsx` \
`│   └── AddProductsPage.jsx`\
`│` \
`│` \
`├── Services/` \
`│   ├── getProductsByCategory.js` \
`│   ├── productsService.js`\
`│   └── ...` \
`│` \
`└── App.jsx`\

### Cómo correr el proyecto

- Clonar el repositorio \
  `git clone <repo-url> `

- Instalar dependencias \
  `npm install`

- Correr el proyecto \
  `npm run dev`

## RUTAS PRINCIPALES

| Ruta             |              Descripción              |
| :--------------- | :-----------------------------------: |
| '/'              | Página principal con listado y filtro |
| '/addProducts'   |       Alta de nuevos productos        |
| /products/edit   |       Edición con tabla y modal       |
| /products/delete |         Eliminación dinámica          |

### Buenas Prácticas

- Arquitectura modular con componentes reutilizables.
- Contextos y reducers desacoplados del UI.
- Código limpio, semántico y mantenible.
- Uso completo de APIs nuevas de Chakra UI v3 (Dialog.Root, Drawer.Root, Table.Root).
- Hooks personalizados (useHome, useResponsiveDetail).

## Home Desktop
<img width="1260" height="904" alt="image" src="https://github.com/user-attachments/assets/bacf8bdb-8c64-4727-8740-c63b27ad128a" />

## Home Mobile
<img width="357" height="728" alt="image" src="https://github.com/user-attachments/assets/1dc9fd32-3fa6-40c9-959e-ba9e2983a4f6" />


