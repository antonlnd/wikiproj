const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
// ...
// router.use(wikiRouter);

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /wiki/add');
});



module.exports = router;