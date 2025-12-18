# 🎄 Holiday Amazon Finds - Landing Page Afiliada

Landing page afiliada a Amazon con tracking de clics en tiempo real usando Supabase.

## 🚀 Características

- ✅ Landing page premium tipo Apple
- ✅ Tracking de clics en tiempo real (Supabase)
- ✅ Dashboard admin privado con analytics
- ✅ Diseño mobile-first responsive
- ✅ Animaciones suaves tipo Apple
- ✅ Despliegue en Vercel (sin configuración extra)

## 📁 Estructura del Proyecto

```
/project
├─ index.html          # Landing page principal
├─ admin.html          # Dashboard admin privado
├─ vercel.json         # Configuración Vercel
├─ assets/
│   ├─ images/         # Imágenes de productos
│   └─ favicon.ico     # Favicon
└─ SUPABASE_SETUP.md   # Guía completa de configuración
```

## 🛠️ Tecnologías

- **HTML5** - Estructura
- **Tailwind CSS** (CDN) - Estilos
- **JavaScript** - Funcionalidad
- **Supabase** - Base de datos y autenticación
- **Chart.js** (CDN) - Gráficos en dashboard
- **Vercel** - Hosting

## 📋 Configuración Rápida

### 1. Configurar Supabase

Sigue la guía completa en **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**

**Resumen rápido:**
1. Crea proyecto en [supabase.com](https://supabase.com)
2. Ejecuta los SQL scripts para crear tablas
3. Crea usuario admin en Authentication
4. Copia credenciales (URL y anon key)

### 2. Actualizar Credenciales

**En `index.html` (línea ~313):**
```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'tu-anon-key';
```

**En `admin.html` (línea ~242):**
```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'tu-anon-key';
const ALLOWED_EMAIL = 'admin@example.com'; // Tu email
```

### 3. Desplegar en Vercel

**Opción A: Desde GitHub (Recomendado)**
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```
Luego conecta el repo en [vercel.com](https://vercel.com)

**Opción B: Desde CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📊 Estructura de Base de Datos

### Tabla `products`
```sql
- id (UUID)
- title (TEXT)
- description (TEXT)
- category (TEXT)
- image_url (TEXT)
- affiliate_url (TEXT)
- created_at (TIMESTAMP)
```

### Tabla `clicks`
```sql
- id (UUID)
- product_id (UUID) → FK products(id)
- user_agent (TEXT)
- clicked_at (TIMESTAMP)
```

## 🔐 Seguridad

- **RLS (Row Level Security)** habilitado en todas las tablas
- **Políticas** configuradas para:
  - Lectura pública de productos
  - Inserción pública de clicks (tracking)
  - Lectura de clicks solo para usuarios autenticados

## 📱 URLs

- **Landing Page**: `https://tu-proyecto.vercel.app`
- **Dashboard Admin**: `https://tu-proyecto.vercel.app/admin.html`

## 📝 Notas

- Las imágenes deben estar en `/assets/images/`
- Vercel sirve automáticamente archivos estáticos desde la raíz
- No se requiere build ni configuración extra
- Todo funciona con archivos estáticos (HTML + JS)

## 🆘 Soporte

Para problemas o preguntas, consulta:
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Guía completa
- [Documentación Supabase](https://supabase.com/docs)
- [Documentación Vercel](https://vercel.com/docs)

---

**Desarrollado con ❤️ para conversiones optimizadas**

