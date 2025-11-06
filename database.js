const mysql = require("mysql2/promise");

// IMPORTANTE: Reemplaza estos valores con tus credenciales de MySQL.
// Deberás crear una base de datos llamada 'webappdb' o cambiar el nombre aquí.
const pool = mysql.createPool({
  host: "0.0.0.0",
  user: "root", // Tu usuario de MySQL
  password: "t00r", // Tu contraseña de MySQL
  database: "laboratorio1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 33060,
});

module.exports = pool;
