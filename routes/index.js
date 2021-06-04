var express = require('express');
const { get } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Hello world');
});

router.get('/index', function(req, res, next) {
  res.render('Hello world - 2');
});

module.exports = router;
