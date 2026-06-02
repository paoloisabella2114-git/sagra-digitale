const db = require('../lib/db');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo non consentito' });

  try {
    const ordine = req.body.ordine;
    const numero = Math.floor(Math.random() * 900) + 100;

    await db.query(
      'INSERT INTO public.sospesi(ordine) VALUES($1)',
      [JSON.stringify({ numero, ordine })]
    );

    const base64 = Buffer.from(JSON.stringify({ numero, ordine })).toString('base64');

    res.json({ numero, base64 });
  } catch (err) {
    console.error('Errore ordine:', err);
    res.status(500).json({ error: 'Errore salvataggio' });
  }
};
