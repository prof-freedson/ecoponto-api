class EcopontoController {
  constructor(db) {
    this.db = db;
  }

  async createEcoponto(req, res) {
    const { nome, latitude, longitude } = req.body;

    if (!nome || !latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Nome, latitude e longitude são obrigatórios." });
    }

    try {
      const newEcoponto = { nome, latitude, longitude };
      const ecopontoRef = await this.db
        .collection("ecopontos")
        .add(newEcoponto);
      return res.status(201).json({ id: ecopontoRef.id, ...newEcoponto });
    } catch (error) {
      console.error("Erro ao cadastrar ecoponto:", error); // Adiciona log detalhado do erro
      return res
        .status(500)
        .json({ error: "Erro ao cadastrar ecoponto.", details: error.message });
    }
  }

  // Future methods for read, update, delete can be added here
}

module.exports = EcopontoController;
