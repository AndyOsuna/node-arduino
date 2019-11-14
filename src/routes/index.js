const { Router } = require('express'),
  router = Router()

/* Ruta inicial, devolvemos  la vista principal */
router.route('/')
  .get((req, res) => {
    res.render('index')
    // res.send("Hello world")
  })

module.exports = router