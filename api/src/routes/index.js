const { Router } = require('express');
const types = require('./types')
const recipies = require("./recipies");
const filters = require("./filters");


const router = Router();

// Configurar los routers
 router.use("/api", types);
 router.use("/api", recipies);
 router.use("/api", filters)


module.exports = router;
