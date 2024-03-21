# Proyecto React con Vite

Este proyecto utiliza React y Vite para una experiencia de desarrollo moderna y eficiente. También se incluyen algunas reglas de ESLint para mantener la calidad del código.

## Características

- React para la creación de interfaces de usuario
- Vite para un entorno de desarrollo rápido con Hot Module Replacement (HMR)
- ESLint para el análisis estático del código

## Estructura del proyecto

- `src/`: Aquí es donde se encuentra todo el código fuente de la aplicación.
  - `assets/`: Contiene todos los recursos estáticos como imágenes.
  - `components/`: Contiene todos los componentes de React utilizados en la aplicación.
  - `helpers/`: Contiene funciones auxiliares utilizadas en toda la aplicación.
  - `hooks/`: Contiene los hooks personalizados de React.
- `public/`: Contiene los archivos estáticos que se sirven directamente por el servidor.
- `styles/`: Contiene todos los archivos de estilos CSS.

## Cómo empezar

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Inicia el servidor de desarrollo con `npm run dev`

## Plugins

Actualmente, se utilizan dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh
