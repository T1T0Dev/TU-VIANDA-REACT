
# 🍱 Tu Vianda — Sistema de Gestión de Ventas de Viandas

<p align="center">
  <img src="https://github.com/user-attachments/assets/51e96caa-27df-4398-b462-380507274228" alt="Logo Tu Vianda" width="250"/>
</p>

---

## 🖼️ Vista previa del sistema

<div align="center">
  <img src="https://github.com/user-attachments/assets/27363674-0352-42e5-ab84-6b2576acf349" width="300"/>
  <img src="https://github.com/user-attachments/assets/0e619e50-6344-46df-86ed-66ad590d1886" width="300"/>
  <img src="https://github.com/user-attachments/assets/160fbe42-4406-4dfa-9c8b-875269da2465" width="300"/>
  <img src="https://github.com/user-attachments/assets/85506e94-9fc2-4245-beac-4b222570ff95" width="300"/>
  <img src="https://github.com/user-attachments/assets/1af4ed78-b85d-4293-802c-9789fddc32a4" width="300"/>
  <img src="https://github.com/user-attachments/assets/981b1891-916f-4f64-bb2d-9255ddc13d98" width="300"/>
  <img src="https://github.com/user-attachments/assets/94386d99-6004-467f-befe-59bed6b426ec" width="300"/>
  <img src="https://github.com/user-attachments/assets/6582934a-e1e6-46ae-b919-d69b5ee144e6" width="300"/>
</div>

---

## 🧠 Descripción

**Tu Vianda** es una aplicación web full stack desarrollada para facilitar la **gestión integral de un negocio de viandas**.  
Permite manejar usuarios, pedidos, clientes, comidas y ventas de forma intuitiva y eficaz.

---

## ⚙️ Tecnologías

### 🖥️ Frontend
- React 19 + Vite
- React Router DOM
- Axios
- React Toastify


### 🧠 Backend
- Node.js
- Express.js
- MySQL

### 💾 Base de Datos
- MySQL

---

## 📁 Estructura del Proyecto

```
TU-VIANDA-REACT/
├── BACKEND/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── db.js
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── FRONTEND/
    └── vianda-app/
        ├── src/
        ├── index.html
        ├── package.json
```

---

## 🚀 Instalación

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tuvianda.git
cd tuvianda/TU-VIANDA-REACT
```

### 2️⃣ Backend

```bash
cd BACKEND
npm install
```

- Renombrar `.env.example` a `.env` y configurar tus credenciales:

```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tuvianda
DB_PORT=3306
JWT_SECRET=tu_clave_secreta
```

> Asegurate de tener creada la base de datos y sus tablas.

### 3️⃣ Frontend

```bash
cd ../FRONTEND/vianda-app
npm install
```

---

## ▶️ Cómo ejecutar el sistema

### 🧠 Backend
```bash
cd BACKEND
node index.js
```

### 💻 Frontend
```bash
cd FRONTEND/vianda-app
npm run dev
```

Luego accedé desde 👉 `http://localhost:5173`

---

## ✅ Funcionalidades destacadas

- 🔐 Login seguro con JWT
- 🧑‍🍳 ABM de comidas y clientes
- 📦 Gestión de pedidos y control de stock
- 📈 Historial de ventas con filtro por fecha
- 📱 Responsive Design para todos los dispositivos

---

## 🔁 Scripts útiles

### Backend
```bash
npm install     # Instala dependencias
node index.js   # Inicia el servidor
```

### Frontend
```bash
npm install     # Instala dependencias
npm run dev     # Ejecuta en modo desarrollo
```

---

## 👤 Autor

**Thiago Robles** — Técnico Programador Universitario  
🔗 [LinkedIn](https://www.linkedin.com/in/tu-linkedin)  
🌐 [Portafolio Web](https://tito.dev.vercel.app)

---

## 🧾 Licencia

MIT — Libre de usar, compartir y mejorar ✨

---

## ⭐ ¿Te gustó este proyecto?

¡Dale una estrella ⭐, compartilo o escribime si querés colaborar!  
**Tu Vianda**, el sabor del código hecho gestión 💻🍲
