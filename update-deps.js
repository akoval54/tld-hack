const request = require("request");
const Papa = require("papaparse");
const {Range} = require("immutable");
const fs = require("fs");

const IdnValidCodes = [];

request("https://www.iana.org/assignments/idna-tables-6.3.0/idna-tables-properties.csv")
  .pipe(
    Papa.parse(Papa.NODE_STREAM_INPUT)
      .on('data', (line) => {
        const codePoint = line[0];
        const isValid = line[1] === 'PVALID';

        if (isValid) {
          if (codePoint.includes('-')) {
            const rangeBoundaries = codePoint.split('-');
            IdnValidCodes.push(...Range(parseInt(rangeBoundaries[0], 16), parseInt(rangeBoundaries[1], 16) + 1));
          } else {
            IdnValidCodes.push(parseInt(codePoint, 16))
          }
        }
      })
      .on('end', () => {
        fs.writeFileSync(
          'src/jsons/idn-valid-codes.json',
          JSON.stringify(IdnValidCodes));
      }));
