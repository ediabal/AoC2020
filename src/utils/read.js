require('../config');
const fs = require('fs');

module.exports = function read(path) {
  try {
    const data = fs.readFileSync(`${process.env.BASE_PATH}/${path}`, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
};
