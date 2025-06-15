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

**Tu Vianda** es una aplicación web para la gestión de ventas, pedidos, clientes y comidas de un negocio de viandas.  
Incluye autenticación de usuarios, control de stock, historial de ventas y más.

---

## 🛠 Tecnologías

- **Frontend:** React 19, Vite, React Router DOM, Axios, React Toastify  
- **Backend:** Node.js, Express, MySQL, JWT, bcryptjs  
- **Base de datos:** MySQL

---

## 🗂️ Estructura del Proyecto

TU-VIANDA-REACT/
│
├── BACKEND/
│ ├── controllers/
│ ├── middlewares/
│ ├── routes/
│ ├── .env
│ ├── db.js
│ ├── index.js
│ └── package.json
│
└── FRONTEND/
└── vianda-app/
├── src/
├── index.html
├── package.json
└── ...

yaml
Copiar
Editar

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tuvianda.git
cd tuvianda/TU-VIANDA-REACT
2. Configurar el Backend
bash
Copiar
Editar
cd BACKEND
npm install
Renombrá .env.example a .env y completá los datos de conexión a MySQL y clave JWT.

Asegurate de tener tu base de datos creada con sus tablas.

3. Configurar el Frontend
bash
Copiar
Editar
cd ../FRONTEND/vianda-app
npm install
▶️ Uso
Iniciar el Backend
bash
Copiar
Editar
cd BACKEND
node index.js
Iniciar el Frontend
bash
Copiar
Editar
cd ../FRONTEND/vianda-app
npm run dev
Accedé desde 👉 http://localhost:5173

🔐 Variables de Entorno
En el archivo .env dentro de BACKEND:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tuvianda
DB_PORT=3306
JWT_SECRET=tu_clave_secreta
🚫 ¡No subas este archivo a GitHub!

✅ Funcionalidades
🔐 Login seguro con JWT

🧑‍🍳 ABM de comidas y clientes

📦 Gestión de pedidos y ventas

📈 Historial de ventas filtrable por fecha

📱 Diseño responsive

🔁 Scripts útiles
Backend
bash
Copiar
Editar
npm install     # Instala dependencias
node index.js   # Inicia el servidor
Frontend
bash
Copiar
Editar
npm install     # Instala dependencias
npm run dev     # Ejecuta modo desarrollo
👤 Autor
Thiago Robles - Programador Universitario

🧾 Licencia
MIT

💬 ¿Te gustó este proyecto?
¡Dale una estrella ⭐, compartilo o escribime si querés colaborar!
Tu Vianda, el sabor del código hecho gestión 💻🍲
