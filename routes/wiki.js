const express = require('express');
const router = express.Router();
let models = require('../models');
let Page = models.Page; 
let User = models.User; 

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.post('/', function(req, res, next) {
    let page = Page.build({
        title: req.body.title,
        content: req.body.content
    });
  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save().then(res.redirect('/'))

  // -> after save -> res.redirect('/');
});



module.exports = router;