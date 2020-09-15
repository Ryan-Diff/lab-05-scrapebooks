const request = require('./request');
const parse = require('./parse');
const store = require('./store');

module.exports = job => {
  console.log(`bookstore page is ${job.data.page}`);
  return request(job.data.page)
    .then(parse)
    .then(store);
};
