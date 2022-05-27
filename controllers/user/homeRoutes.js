const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).render('home', { 
    pageTitle: "TEUNE-TECH HOME",
    errorCSS: false,
    mainCSS: true,
    adminCSS: false,
    mainJS: true,
    errorJS: false,
    })
  })

module.exports = router;