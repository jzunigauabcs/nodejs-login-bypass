const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "0.0.0.0",
  user: "root",
  password: "t00r",
  database: "laboratorio1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 33060,
  multipleStatements: true,
});

module.exports = pool;
