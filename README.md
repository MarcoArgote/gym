# ALPHA by team FERREL - Landing Page

Una landing page moderna y altamente optimizada para un gimnasio, desarrollada con React, Vite y Tailwind CSS.

## 🚀 Características

- ⚡ **Súper Rápido**: Construido con Vite para desarrollo y compilación ultrarrápidos
- 🎨 **Diseño Moderno**: Interfaz atractiva con animaciones fluidas usando Framer Motion
- 📱 **Responsive**: Totalmente adaptable a todos los dispositivos
- 🗺️ **Mapa Interactivo**: Integración con Leaflet para mostrar la ubicación
- ♿ **Accesible**: Código semántico y accesible
- 🎯 **Optimizado**: Code splitting y lazy loading para mejor rendimiento

## 📋 Secciones

1. **Hero/Inicio**: Página principal con llamado a la acción impactante
2. **Membresías**: Diferentes planes con precios y características
3. **Máquinas**: Galería del equipamiento disponible
4. **Nosotros**: Historia y valores del gimnasio
5. **Contacto**: Formulario de contacto y mapa de ubicación

## 🛠️ Tecnologías

- **React 18**: Biblioteca UI
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework CSS utility-first
- **Framer Motion**: Animaciones avanzadas
- **React Leaflet**: Mapas interactivos
- **React Icons**: Iconografía

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm run build
npm run preview
```

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en [tailwind.config.js](tailwind.config.js):

```js
colors: {
  primary: {
    DEFAULT: '#FF6B00',
    dark: '#E05A00',
    light: '#FF8533'
  }
}
```

### Contenido

Todo el contenido está en los componentes dentro de [src/components/](src/components/). Modifica los textos, imágenes y datos según tus necesidades.

### Mapa

Para cambiar la ubicación del mapa, modifica las coordenadas en [src/components/Contact.jsx](src/components/Contact.jsx):

```js
const gymLocation = [latitud, longitud];
```

## 📦 Build para Producción

El proyecto está optimizado para producción con:

- Code splitting automático
- Minificación de CSS y JavaScript
- Optimización de imágenes
- Tree shaking

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📧 Contacto

Para más información, visita nuestra web o contáctanos a través del formulario.

---

Desarrollado con ❤️ para la comunidad fitness
