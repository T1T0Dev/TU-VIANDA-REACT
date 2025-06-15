import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT // Opcional, si usas un puerto distinto
});

export default db;