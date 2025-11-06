const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login", { error: null });
});

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
      res.render("login", { error: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    console.error("Error en la base de datos:", error);
    res.render("login", {
      error: "Error en el servidor. Inténtalo más tarde.",
    });
  }
});

app.get("/search", (req, res) => {
  res.render("search", { products: [] });
});

app.post("/search", async (req, res) => {
  const { searchTerm } = req.body;
  try {
    const query =
      "SELECT nombre, descripcion, precio FROM productos WHERE nombre LIKE '%" +
      searchTerm +
      "%'";
    console.log(query);
    const [products] = await db.execute(query);
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
