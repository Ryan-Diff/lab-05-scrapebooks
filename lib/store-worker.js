const store = require('./store');

module.exports = job => {
  return store(job.data.books);
};

