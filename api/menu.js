const db = require('../lib/db');
module.exports = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT a.id, a.descrizione AS nome, a.prezzo,
             t.descrizione AS nome_tipologia,
             COUNT(ai.id) AS num_ingredienti
      FROM articoli a
      JOIN tipologie t ON t.id = a.id_tipologia
      LEFT JOIN articoli_ingredienti ai ON ai.id_articolo = a.id AND ai.visibile IS NOT FALSE
      WHERE t.visibile = true
      GROUP BY a.id, a.descrizione, a.prezzo, t.descrizione, t.posizione
      ORDER BY t.posizione, a.descrizione
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Errore DB' });
  }
};
