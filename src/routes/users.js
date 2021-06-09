var express = require('express');
var router = express.Router();

import { SignUp } from '../controllers/users.controllers';

/* GET users listing. */
/* USER */
router.get('/users', function(req, res, next) {
  res.send('Welcome - users');
});

/* ADMIN */
/*
router.post('/', function(req, res, next) {
});
router.put('/', function(req, res, next) {
});
router.delete('/', function(req, res, next) {
});
*/
module.exports = router;
