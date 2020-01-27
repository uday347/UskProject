let ranks =function(){
//var ranksMenuElem = element(by.css('div[class="nav-container"]')).all(by.tagName('li')).get(18);
var ranksMenuElem = element(by.className('ft-ranks'));
var addNew = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
//var titleField= element(by.name('title'));
var titleField = element(by.css('div[class="col-12 form-group"]'));
var testFee = element(by.id('testFee'));
var nDaysPenalty = element(by.id('penaltyDays'));
var penaltyAmount = element(by.id('penaltyAmount'));
var description = element(by.id('description'));
var btnSave = element(by.buttonText('Save'));
var btnClose = element(by.buttonText('Close'));
//var btnSave = element.all(by.css('div[class="modal-footer card-footer"]')).get(0);

this.ranksMenu= function(){
    browser.executeScript("arguments[0].scrollIntoView();", ranksMenuElem.getWebElement());
    ranksMenuElem.click();
}

this.addNewClick = function(){
    addNew.click();
}

this.enterTitle = function(title){
    titleField.sendKeys(title);
}

this.enterTestFee = function(fee){
    testFee.sendKeys(fee);
}

this.numDaysToCheckPenalty = function(penaltyDays){
    nDaysPenalty.sendKeys(penaltyDays);
}

this.enterPenaltyAmount = function(PanalAmount){
    penaltyAmount.sendKeys(PanalAmount);
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
module.exports=ranks;