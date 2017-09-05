var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  names = ['Marian', 'Ira'];
  name  = names[Math.floor(Math.random() * names.length)];

  res.render('home/index', { name: name });//comment for second git commit
});

module.exports = router;
