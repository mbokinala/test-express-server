var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("Hi there")
});

router.post('/', function(req, res, next) {
  res.status(200).send('received data successfully');
  console.log(res.data)
});

module.exports = router;
