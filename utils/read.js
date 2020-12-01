const fs = require('fs');
require('dotenv').config();

module.exports = function read(path) {
  try {
    const data = fs.readFileSync(`${process.env.BASE_PATH}/${path}`, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
};
