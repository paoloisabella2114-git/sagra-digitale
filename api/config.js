module.exports = async (req, res) => {
  res.json({
    logo_url: "/img/logo300.png",
    titolo_sezione: "🌟 SPECIALITÀ DI OGGI",
    specialita: ["🍝 Gnocchi al Ragù", "🍝 Gnocchi anatra", "🍖 Stinco al Forno", "🐟 Pesce alla griglia"],
    telefono_assistenza: "1234",
    footer_organizzazione: "Gruppo pindol pando"
  });
};
