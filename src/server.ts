import express from "express";
import hbs from "hbs";
import path from "path";

const app = express();

// Configuration du moteur de templates
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "..", "views"));
hbs.registerPartials(path.join(__dirname, "..", "views/layouts"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { layout: "layouts/main", title: "Accueil" });
});

app.get("/login", (req, res) => {
  res.render("login", { layout: "layouts/main", title: "Connexion" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Tentative de connexion :", email, password);
  res.send("Login reçu");
});

// Serveur
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
