const { Router } = require("express");
const types = require("./types");
const recipies = require("./recipes");
const filters = require("./filters");

const router = Router();

// Configurar los routers

router.use("/", recipies);
router.use("/", types);
router.use("/", filters);

module.exports = router;
