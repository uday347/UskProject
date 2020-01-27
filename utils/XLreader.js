var XLreader = function(){
var XLSX= requie('exceljs');
var wb = new workbook();

this.readFromExcel= function(sheetname, filepath/*,rowNum,colNum*/){
    //read_from_excel('Login', )
    return wb.XLSX.readFile(filepath).then(function(){
    //var workbook = XLSX.readFile(filepath);
    var worksheet = wb.sheets(sheetname);
    var row = worksheet.getRow(rowNum);
    var cell = row.getCell(colNum)
    var data = cell.value();
    //return data;

    wb.XLSX.writeFile= function(sheetName, filepath){

    }
    
    var noOfRows=worksheet.rowCount();
    for(var i=1; i<=noOfRows; i++){

    }
   
    //var userName = worksheet.getRow(1).getCell(0);
    //var password = worksheet.getRow(j).getCell(0);
    //var userNameColumn=A[2];
    //var userNameValue = worksheet[userNameColumn];
    //console.log(userNameValue);

   // return XLSX.utils.sheet_to_json(worksheet);
})
}
}
module.exports= XLreader;

/*
var workbook=XLSX.readFile('./testData.xlsx');
var worksheet=workbook.sheets['Login']
var a= XLSX.utils.sheet_to_json(worksheet);
*/