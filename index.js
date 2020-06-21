var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metoda GET' });
});

router.post('/post', function (req, res) {
 response ={
  first_name:req.body.name
 };
 res.end(JSON.stringify(response));
});
module.exports = router;
