let locations= function(){
var locationsMenuElem = element(by.className('ft-locations'));
var btnAddNew = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
var lName = element(by.id('locationName'));
var contact = element(by.id('contact'));
var description = element(by.id('description'));
var btnSave = element(by.buttonText('Save'));
var btnClose = element(by.buttonText('Close'));

this.locationMenu= function(){
    browser.executeScript("arguments[0].scrollIntoView();", locationsMenuElem.getWebElement());
    locationsMenuElem.click();
}

this.addNew=function(){
    btnAddNew.click();
}

this.enterLocationName = function(location){
    lName.sendKeys(location);
}

this.enterContact = function(cont){
    contact.sendKeys(cont);
}

this.enterDesc = function(desc){
    description.sendKeys(desc);
}

this.saveClick = function(){
    btnSave.click();
}

this.closeClick = function(){
    btnClose.click();
}
}
module.exports=locations;