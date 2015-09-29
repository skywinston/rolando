var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res){
  res.render('index');
});

router.get('/books', function(req, res, next){
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYT_API_KEY)
    .end(function (response) {
    res.render('books', { books : response.body.results.books } );
    // res.status(200).send(response.body.results.books);
    });
});

module.exports = router;
