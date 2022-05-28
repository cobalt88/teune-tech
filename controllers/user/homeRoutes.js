const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).render('home', { 
    pageTitle: "TEUNE-TECH HOME",
    errorCSS: false,
    mainCSS: true,
    adminCSS: false,
    mainJS: true,
    errorJS: false,
    loggedIn: true,
    })
  })

  router.get('/login', (req, res, next) => {
    res.status(200).render('login', {
      pageTitle: "Login",
      loggedIn: false
    })
  });

  router.get('/register', (req, res, next) => {
    res.status(200).render('register', {
      pageTitle: "Sign Up",
      loggedIn: false
    })
  });

module.exports = router;