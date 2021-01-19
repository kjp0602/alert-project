let express = require('express');
let router = express.Router();
var app = require('../app');
/* GET home page. */
router.get('/', function(req, res, next) {
  let id = req.query.id;
  let msg = req.query.msg;
  let url = req.query.url;

  res.render('index', { title: 'Express', id: id, msg: msg, url: url });
});

module.exports = router;