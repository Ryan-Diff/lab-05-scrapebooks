module.exports = job => {
  console.log(`worker jobId is ${job.id} you sent ${job.data}`);
  return Promise.resolve('done');
};
