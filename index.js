const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const port = 3000;

// Configurar EJS como el motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

// Ruta para la página de login
app.get("/", (req, res) => {
  res.render("login", { error: null });
});

// Ruta para procesar el login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const query =
      "SELECT * FROM users WHERE username = '" +
      username +
      "' AND password = '" +
      password +
      "'";
    console.log(query);
    const [rows] = await db.execute(query);
    if (rows.length > 0) {
      res.redirect("/search");
    } else {
      // Credenciales incorrectas
      res.render("login", { error: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    console.error("Error en la base de datos:", error);
    res.render("login", {
      error: "Error en el servidor. Inténtalo más tarde.",
    });
  }
});

// Ruta para mostrar la página de búsqueda
app.get("/search", (req, res) => {
  res.render("search", { products: [] }); // Inicialmente no hay productos
});

// Ruta para procesar la búsqueda de productos
app.post("/search", async (req, res) => {
  const { searchTerm } = req.body;
  try {
    const [products] = await db.execute(
      `SELECT * FROM products WHERE name LIKE ?`,
      [`%${searchTerm}%`],
    );
    res.render("search", { products: products });
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    res.render("search", {
      products: [],
      error: "Error al realizar la búsqueda.",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
