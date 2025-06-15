# Tu Vianda - Sistema de Gestión de Ventas de Viandas

Este proyecto es una aplicación web para la gestión de ventas, pedidos, clientes y comidas de un negocio de viandas. Incluye autenticación de usuarios, control de stock, historial de ventas y más.

## Tecnologías

- **Frontend:** React 19, Vite, React Router DOM, Axios, React Toastify
- **Backend:** Node.js, Express, MySQL, JWT, bcryptjs
- **Base de datos:** MySQL

---

## Estructura del Proyecto

```
TU-VIANDA-REACT/
│
├── BACKEND/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── .env
│   ├── db.js
│   ├── index.js
│   └── package.json
│
└── FRONTEND/
    └── vianda-app/
        ├── src/
        ├── index.html
        ├── package.json
        └── ...
```

---

## Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tuusuario/tuvianda.git
cd tuvianda/TU-VIANDA-REACT
```

### 2. Configura el Backend

```bash
cd BACKEND
npm install
```

- Renombra el archivo `.env.example` a `.env` y completa tus datos de conexión a MySQL y la clave JWT.
- Crea la base de datos y las tablas necesarias en MySQL.

### 3. Configura el Frontend

```bash
cd ../FRONTEND/vianda-app
npm install
```

---

## Uso

### 1. Inicia el Backend

```bash
cd BACKEND
node index.js
```

### 2. Inicia el Frontend

```bash
cd ../FRONTEND/vianda-app
npm run dev
```

La app estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

---

## Variables de Entorno

Crea un archivo `.env` en la carpeta `BACKEND` con el siguiente contenido:

```
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tuvianda
DB_PORT=3306
JWT_SECRET=tu_clave_secreta
```

**¡No subas este archivo a GitHub!**

---

## Funcionalidades

- Login seguro con JWT
- ABM de comidas y clientes
- Gestión de ventas y pedidos
- Historial de ventas con filtro por fecha
- Responsive y fácil de usar

---

## Scripts útiles

### Backend

- `npm install` — Instala dependencias
- `node index.js` — Inicia el servidor

### Frontend

- `npm install` — Instala dependencias
- `npm run dev` — Inicia el frontend en modo desarrollo

---

## Licencia

MIT

---

## Autor

- [Thiago Robles - Programador Universitario](https://github.com/T1T0Dev)