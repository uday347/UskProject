let programs = function(){
var programMenu = element(by.className('ft-programs'));
var btnAddNew = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
var pName = element(by.id('programName'));
this. startDate = element(by.name('startDate'));
this. endDate = element(by.name('endDate'));
var description = element(by.id('description'));
var btnSave = element(by.buttonText('Save'));
var btnClose = element(by.buttonText('Close'));
this. CalenderlefrArrow=element(by.css('div[class="ngb-dp-arrow"]'));
this. CalenderRightrArrow=element(by.css('div[class="ngb-dp-arrow right"]'));


this.programMenuClick = function(){
    browser.executeScript("arguments[0].scrollIntoView();", programMenu.getWebElement());
    programMenu.click();
}

this.addNewClick = function(){
    btnAddNew.click();
}

this.enterProgramName = function(program){
    pName.sendKeys(program);
}

this.selectDates = function(Date111){
    var calender=element(by.tagName('ngb-datepicker'));
    var monthView=calender.element(by.tagName('ngb-datepicker-month-view'));
    var Dates=monthView.all(by.css('div[class="ngb-dp-day ng-star-inserted"]'));
    Dates.get(Date111).click();

}

this.selectEndDate = function(EDate){
    endDate.sendKeys(EDate);
}

this.enterDescription = function(desc){
    description.sendKeys(desc);
}

this.saveClick = function(){
    btnSave.click();
}

this.closeClick = function(){
    btnClose.click();
}

}
module.exports=programs;