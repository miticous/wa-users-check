const fs = require('fs')
const path = require('path')

const getNumbersFromFile = (_path) => {
    try {  
        const data = fs.readFileSync(path.join(_path), 'utf8');

        return data.split('\n');    
    } catch(e) {
        console.log('Error:', e.stack);
    }

}

module.exports = getNumbersFromFile