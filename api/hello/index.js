const cors = require("../../src/middleware/cors");

// Endpoint teste
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

  res.status(200).json({ message: "Hello from Vercel!" });
}; 