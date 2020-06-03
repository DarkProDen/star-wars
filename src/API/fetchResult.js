//const fetch = require('node-fetch');

function fetchResult(url) {
  return fetch(url).then((response) => response.json());
}

module.exports = fetchResult;
