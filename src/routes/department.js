var express = require('express');
var router = express.Router();

/* GET department page. */
/* ADMIN */
router.get('/', function(req, res, next) {
  res.send('Welcome - department');
});
/*
router.post('/', function(req, res, next) {
});

router.put('/', function(req, res, next) {
});
*/
module.exports = router;