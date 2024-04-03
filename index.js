const generateUUID = require('./generateUUID')
const getMaxValue = require('./getMaxValue')

module.exports = (str) => {
    return str.split("").map((char) => parseInt(char));
  }