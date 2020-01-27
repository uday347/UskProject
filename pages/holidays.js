let holidays=function(){
    //var holidaysMenuElem = element(by.css('div[class="nav-container"]')).all(by.tagName('li')).get(15);
    var holidaysMenuElem = element(by.className('ft-holidays'));
    var btnAddHoliday = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
    var holidayName = element(by.id('holidayName'));
    var holidayDate = element(by.name('holidayDate'));
    var desc = element(by.id('description'));
    //var btnSave = element(by.css('div[class="modal-footer card-footer"]')).all(by.tagName('button')).get(1);
    var btnSave = element(by.buttonText('Save'));
    var btnClose = element(by.buttonText('Close'));

    this.holidayMenu=function(){
        browser.executeScript("arguments[0].scrollIntoView();", holidaysMenuElem.getWebElement());
        holidaysMenuElem.click();
    }
    this.addHoliday =function(){
        btnAddHoliday.click();
    }
    this.holidayNameInput = function(hname){
        holidayName.sendKeys(hname);
    }
    this.holidayDateSelect = function(date){
        holidayDate.click().sendKeys(date);
    }
    this.description = function(desc1){
        desc.sendKeys(desc);
    }
    this.saveClick = function(){
        btnSave.click();
    }
    this.closeClick =function(){
        btnClose.click();
    }


}
module.exports=holidays;