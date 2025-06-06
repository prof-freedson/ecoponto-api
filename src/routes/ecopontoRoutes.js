const express = require("express");
const EcopontoController = require("../controllers/ecopontoController");
const db = require("../config/firebase");

const router = express.Router();
const ecopontoController = new EcopontoController(db);

// POST /api/ecopontos
router.post("/", ecopontoController.createEcoponto.bind(ecopontoController));
// Additional routes can be added here in the future

module.exports = router;
