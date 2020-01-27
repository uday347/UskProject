let events= function(){
var eventsMenu = element(by.className('ft-events'));
this.btnAddNew = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
this.eventName = element(by.id('eventName'));
this.startDate = element(by.name('startDate'));
this.endDate = element(by.name('endDate'));
this.description = element(by.id('description'));
//this.btnSave = element(by.buttonText('Save'));
this.btnSave =element(by.css('div[class="card-footer text-right"]')).all(by.tagName('a')).get(1);
this.btnClose = element(by.buttonText('Close'));
this.calenderLeftArrow = element(by.css('div[class="ngb-dp-arrow"]'));
this.calenderRightArrow = element(by.css('div[class="ngb-dp-arrow right"]'));


this.eventsMenuClick = function(){
    browser.executeScript("arguments[0].scrollIntoView();", eventsMenu.getWebElement());
    eventsMenu.click();
}

this.selectDate = function(Date1){
    var calender = element(by.tagName('ngb-datepicker'));
    var monthView = calender.all(by.tagName('ngb-datepicker-month-view'));
    var date = monthView.all(by.css('div[class="ngb-dp-day ng-star-inserted"]'));
    date.get(Date1).click();
}

}
module.exports=events;