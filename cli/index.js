const { pipeline } = require('stream');
const { program } = require('commander');
const through2 = require('through2');

const createStream = require('./common/create-stream');
const codeDecodeStr = require('./common/coder');
const validateInputParams = require('./common/validate-params');

program
  .option('-s, --shift <num>', 'a shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv);

const options = validateInputParams(program);

const transformText = through2((data, enc, cb) =>
  cb(
    null,
    Buffer.from(codeDecodeStr(data.toString(), options.shift, options.action))
  )
);

pipeline(
  createStream.newReadSteam(options.inputFilePath),
  transformText,
  createStream.newWritSteam(options.outputFilePath),
  err => {
    if (err) console.error('Pipeline failed.', err);
    else {
      console.log(
        'Successfully, the encoding/decoding operation was performed. Open file:',
        options.outputFilePath
      );
    }
  }
);
