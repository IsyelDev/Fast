import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "First Web Node" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About First Node Website" });
});


router.post("/register", (req, res) => {
  const username = req.body.username; // Extraemos 'username' del cuerpo de la solicitud

  username
    ? res.status(200).send(`Welcome, ${username}!`)
    : res.status(400).send("Error: Username is required");
});


router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

export default router;