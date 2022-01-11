const { Router } = require("express");
const types = require("./types");
const recipies = require("./recipes");
const filters = require("./filters");

const router = Router();

// Configurar los routers
router.use("/api", recipies);
router.use("/api", types);
router.use("/api", filters);

module.exports = router;
