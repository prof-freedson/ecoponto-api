const EcopontoController = require("./ecopontoController");
const db = require("../config/firebase");

const ecopontoController = new EcopontoController(db);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    return ecopontoController.createEcoponto(req, res);
  }
  res.status(405).json({ error: "Método não permitido" });
};
