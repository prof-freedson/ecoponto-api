const EcopontoController = require("../../src/controllers/ecopontoController");
const db = require("../../src/config/firebase");
const cors = require("../../src/middleware/cors");

const ecopontoController = new EcopontoController(db);

module.exports = async (req, res) => {
  // Aplica o middleware CORS
  await new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

  if (req.method === "POST") {
    return ecopontoController.createEcoponto(req, res);
  }
  res.status(405).json({ error: "Método não permitido" });
}; 