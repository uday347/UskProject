'use strict';
var fs= require('fs-extra');
var excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    source: fs.readFileSync('testData.xlsx'),
    headers: {
        rows: 1
    }
   

});

