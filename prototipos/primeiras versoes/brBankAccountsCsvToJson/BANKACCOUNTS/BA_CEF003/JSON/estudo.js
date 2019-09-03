
const fs = require('fs');

const jsonFileData = fs.readFileSync('./BA_CEF003.json', 'utf8')

console.log(jsonFileData === '' ? 'sim' : 'deu errado')


// function appendJsonDataToJsonFile(jsonData, jsonFolder = './JSON', jsonFile, fs = require('fs')) {

//    try {
//       fs.appendFileSync(`${jsonFolder}/${jsonFile}`, jsonData);
//       console.log('The "data to append" was appended to file!');
//    } catch (err) {
//       /* Handle the error */
//    }
// }
