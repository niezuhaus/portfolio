var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'start - niezuhaus', msg: 'start' });
});

router.get('/bezierforms', function(req, res) {
  res.render('bezierforms', { title: 'drawings' });
});

router.get('/georg_nees', function(req, res) {
  res.render('georg_nees', { title: 'georg nees' });
});

router.get('/manfred_mohr', function(req, res) {
  res.render('manfred_mohr', { title: 'manfred mohr' });
});

router.get('/metal_data_sounds', function(req, res) {
  res.render('metal_data_sounds', { title: 'metal, data, sounds' });
});

router.get('/lilian_ate_a_stone', function(req, res) {
  res.render('lilian_ate_a_stone', { title: 'lilian ate a stone' });
});

router.get('/science_poster_free_software', function(req, res) {
  res.render('science_poster_free_software', { title: 'digitale infrastrukturen der freiheit' });
});

router.get('/p/:msg', function(req, res) {
  res.render('index', { title: req.params.msg + ' - niezuhaus', msg: req.params.msg });
});

module.exports = router; 
