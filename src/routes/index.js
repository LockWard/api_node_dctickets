var express = require('express');
var router = express.Router();
const { sequelize } = require('sequelize');

/* GET home/report page. */
/* USER */
router.get('/', function(req, res, next) {
  res.send('Welcome - report');
});
/*
router.post('/', function(req, res, next) {
});
*/

/* ADMIN */
/*
router.get('/', function(req, res, next) {
});
router.put('/', function(req, res, next) {
});
*/
module.exports = router;
