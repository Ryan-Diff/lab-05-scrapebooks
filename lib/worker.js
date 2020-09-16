const request = require('./request');
const parse = require('./parse');

module.exports = job => {
  console.log(`bookstore page is ${job.data.page}`);
  console.log(job.data.page);
  return request(job.data.page)
    .then(parse);
};
