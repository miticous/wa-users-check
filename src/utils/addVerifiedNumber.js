const fs = require('fs')
const path = require('path')
const util = require('util')

const appendFile = util.promisify(fs.appendFile)

const addVerifiedNumber = async (_path, number, verified) => {
    try {
        await appendFile(path.join(_path), `${number};${verified}\n`);
    } catch (error) {
        console.log('Error:', e.stack);
    }
}

module.exports = addVerifiedNumber;