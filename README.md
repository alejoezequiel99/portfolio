# Portfolio Web - María Florencia Silva ✨

Portfolio profesional de alto impacto desarrollado con **React**, **Vite**, **Tailwind CSS** y **Framer Motion**, inspirado en la estética dark glassmorphism con orbes flotantes y gradientes corporativos (`#4C2365` y `#49A4BB`).

---

## 🚀 Características Principales

- **Diseño Glassmorphism Premium**: Efecto vidrio esmerilado (`backdrop-blur`), tarjetas translúcidas, orbes orgánicos de fondo y tipografía moderna **Rethink Sans**.
- **Animaciones & Microinteracciones**:
  - Cursor interactivo personalizado con halo dinámico y reactivo al cursor.
  - Orbes de gradiente flotantes y burbujas de vidrio con física sutil.
  - Tarjetas interactivas con elevación y halo en hover.
  - Modales emergentes detallados para cada proyecto con enlaces a código y demos.
- **Secciones Completas**:
  - **Hero**: Titular de alto impacto, avatar con anillo halo brillante (`#49A4BB` / `#4C2365`), botones de acción rápida e indicadores de métricas.
  - **Proyectos**: Cuadrícula de 6 proyectos destacados con filtros dinámicos (Todos, Frontend, Datos & Excel, IA & Soluciones).
  - **Habilidades**: Habilidades blandas (*Buena compañera, Trabajo en equipo, Empática, Puntual*) y técnicas (*React, Tailwind, Excel Avanzado, Office, Excalidraw, Inteligencia Artificial*).
  - **Sobre Mí & Formación**: Reseña personal, valores y línea de tiempo formativa.
  - **Contacto**: Tarjeta de correo (`mariafsilva77@hotmail.com`) con botón de copiado en un clic y feedback visual, WhatsApp directo y formulario interactivo con celebración confetti.
  - **Footer**: Enlaces a redes sociales y derechos reservados.

---

## 🛠️ Cómo Ejecutar el Proyecto

1. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrí tu navegador en `http://localhost:5173/`.

2. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## ✏️ Cómo Personalizar tu Información

Toda la información del portfolio está centralizada en un único archivo:
👉 [`src/data/portfolioData.js`](src/data/portfolioData.js)

Ahí podés editar fácilmente:
- Tu nombre, titular, bio y correo.
- Proyectos (títulos, descripciones, etiquetas, enlaces a GitHub o demos).
- Habilidades blandas y técnicas.
- Enlaces a tus redes sociales (LinkedIn, GitHub, WhatsApp).

### Cambiar tu Foto de Perfil:
Simplemente reemplazá el archivo `public/avatar.jpg` con tu propia fotografía manteniendo el mismo nombre, o editá la propiedad `avatar` en `src/data/portfolioData.js`.
