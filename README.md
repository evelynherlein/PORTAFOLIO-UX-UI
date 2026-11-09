# Portfolio web — Evelyn Herlein

Trabajo Final de Diseño UX-UI 2026 (FCyT, Sede Concepción del Uruguay).

- **Sitio:** https://TU-SITIO.netlify.app  ← reemplazar
- **Figma:** https://www.figma.com/design/TU-LINK  ← reemplazar (permiso de visualización)
- **Proceso UX:** ver [PROCESO.md](PROCESO.md)

## Stack
HTML5 semántico · CSS3 (variables en `:root`, Flexbox y Grid, mobile-first) · JavaScript vanilla (solo menú mobile). Sin frameworks. Tipografías: Poppins e Inter (`font-display: swap`).

## Estructura
```
index.html            one-page: header, hero, métricas, sobre mí, habilidades, proyectos, formación, contacto, footer
caso-*.html           casos de estudio (Cubrí Seguros, Coffea, Mate&Co, MOTOZONE)
tienda.html           prototipo navegable de MOTOZONE (catálogo, filtros, ficha, carrito, checkout simulado)
404.html              página de error personalizada
css/styles.css        design system y estilos
js/main.js            menú mobile (aria-expanded / aria-controls)
js/tienda.js          lógica de la tienda MOTOZONE (JavaScript vanilla)
img/                  imágenes WebP con width/height
netlify.toml          headers de seguridad
```

## Despliegue (Netlify, desde GitHub)
1. Subir el repo a GitHub (público, commits incrementales).
2. Netlify → *Add new site → Import from Git* → elegir el repo, rama `main`, sin build command, publish directory `.`.
3. Cada `git push` a `main` despliega automáticamente. Agregar la URL final acá y en la descripción del repo.
4. El formulario de contacto funciona con Netlify Forms (se activa solo al desplegar).

## Antes de entregar
- Reemplazar `TU-CORREO@dominio.com`, `TU-USUARIO` (LinkedIn) y `TU-SITIO.netlify.app` en los HTML.
- Reemplazar la ilustración "EH" de *Sobre mí* por una foto (con `alt` descriptivo) si querés.
- Correr Lighthouse (mobile) y guardar la captura en `docs/`.

## Accesibilidad y performance
Link "Saltar al contenido", foco visible, contraste AA, un solo `h1`, `lang="es-AR"`, `prefers-reduced-motion` respetado, imágenes WebP con `loading="lazy"` bajo el pliegue.

## Créditos y uso de IA
- Diseño visual creado en Figma Make a partir del concepto propio; la maquetación estática fue generada con ayuda de Claude (IA) y revisada por la autora.
- Fotos y capturas de los proyectos: material propio de los TPs. Íconos: SVG inline (estilo Lucide).
- Declaración de uso de IA: [completar qué se generó y cómo se revisó].
