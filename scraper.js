const request = require('./lib/request');
const parse = require('./lib/parse');
const store = require('./lib/store');

request()
  .then(html => parse(html))
  .then(books => store(books))
  .then(processedBooks => console.log(processedBooks.length));
