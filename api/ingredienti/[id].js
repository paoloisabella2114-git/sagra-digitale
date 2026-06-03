const db = require('../../lib/db');
module.exports = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await db.query(`
      SELECT ai.id, i.descrizione, i.descrizionebreve, i.prezzo,
             ai.quantita_massima, ai.obbligatorio, ai.posizione
      FROM articoli_ingredienti ai
      JOIN ingredienti i ON i.id = ai.id_ingrediente
      WHERE ai.id_articolo = $1 AND ai.visibile IS NOT FALSE
      ORDER BY ai.posizione
    `, [id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Errore DB' });
  }
};
