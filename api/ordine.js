const db = require('../lib/db');
module.exports = async (req, res) => {
  if(req.method !== 'POST') return res.status(405).json({ error: 'Metodo non consentito' });
  try {
    const ordine = req.body;
    const numero = Math.floor(Math.random() * 900) + 100;
    await db.query('INSERT INTO public.sospesi(ordine) VALUES($1)', [JSON.stringify({ numero, ordine })]);
    res.json({ numero });
  } catch (err) {
    res.status(500).json({ error: 'Errore salvataggio' });
  }
};
