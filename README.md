# Rekubre — Chatbot WhatsApp (Prototipo)

Prototipo interactivo del chatbot de WhatsApp para Rekubre Honduras.  
Simula el flujo completo de atención al cliente con catálogo de productos.

## 🚀 Deploy rápido en Vercel

### Opción A: Desde GitHub (recomendado)
1. Subí este proyecto a un repo en GitHub
2. Andá a [vercel.com](https://vercel.com) e iniciá sesión con GitHub
3. Clic en **"Add New Project"**
4. Seleccioná el repo `rekubre-chatbot`
5. Vercel detecta Vite automáticamente — solo dale **"Deploy"**
6. En ~1 minuto tenés tu link: `https://rekubre-chatbot.vercel.app`

### Opción B: Desde terminal con Vercel CLI
```bash
npm install
npm run build
npx vercel --prod
```

## 🚀 Deploy en Netlify

### Opción A: Drag & drop
1. Ejecutá `npm install && npm run build`
2. Andá a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastrá la carpeta `dist/` al navegador
4. ¡Listo! Te da un link público al instante

### Opción B: Desde GitHub
1. Subí a GitHub
2. En Netlify → "Add new site" → "Import an existing project"
3. Seleccioná el repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

## 💻 Desarrollo local

```bash
npm install
npm run dev
```
Abrí `http://localhost:5173` en tu navegador.

## 📋 Productos incluidos

| Categoría | Productos |
|-----------|-----------|
| Construcción | Ladrillo Planchado, Superpulido, Sobrepiso Gris, Microcemento, Acril Techo |
| Decoración | Grama Artificial, Muros Verdes, Zócalo, Molduras, Baldosa, Fachaleta |
| Seguridad Vial | Topes de Estacionamiento, Reductores de Velocidad |
| Calentadores | Calentadores Solares |
| Tejas | Tejas de Barro |
| Pilas | Pilas de Concreto |
| Tapaderas | Tapaderas de Cisterna, Tapaderas de Pozo |

## 🔧 Personalización

Para editar productos, descripciones o flujos, modificá el archivo:  
`src/RekubreWhatsApp.jsx`

- `REKUBRE_PRODUCTS` — catálogo de productos con descripciones y keywords
- `CATEGORIES` — organización por categorías
- `INITIAL_MESSAGES` — mensaje de bienvenida
- Contacto y horarios están en las respuestas del bot

---
Desarrollado por Isaac · 2026
