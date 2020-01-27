let eventsPage=require('../pages/events');
var ep = new eventsPage();
var RequiredValidations = element.all(by.css('span[class="validation-field-message"]'));
describe('Events', function(){

    xit('verify Page Title', function(){
        ep.eventsMenuClick();
        browser.sleep(3000);
        var title = browser.getTitle();
        expect(title).toEqual('Events List - USK Martial Arts');
    })
    xit('Save with empty data', function(){
        ep.eventsMenuClick();
        browser.sleep(3000);
        ep.btnAddNew.click();
        ep.btnSave.click();
        expect(RequiredValidations.get(0).getText()).toEqual('* Event Name Required');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    xit('Enter lessthan 3 characters at Event name and click on save', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('a');
        ep.btnSave.click();
        expect(RequiredValidations.get(0).getText()).toEqual('* Minimum 3 Characters Required');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    xit('Enter Alphabets at Event name and click on save', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('Event');
        ep.btnSave.click();
        expect(RequiredValidations.get(0).getText()).toEqual('');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    xit('Enter numerics at Event name and click on save', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('123');
        ep.btnSave.click();
        expect(RequiredValidations.get(0).getText()).toEqual('Only Alphabets are allowed');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    xit('Enter Alpha numerics at Event name and click on save', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('Test123');
        ep.btnSave.click();
        expect(RequiredValidations.get(0).getText()).toEqual('Only Alphabets are allowed');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    xit('Enter morethan 30 characters at Event name and click on save', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('aaaaaabbbbbbbbbbbbccccccccccccdddd');
        ep.btnSave.click();
        expect(RequiredValidations.get(0).getText()).toEqual('');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
        //it will take upto 30 characters and not displaying any validation
    })
    xit('Enter valid event name, select date in invalid format', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('Test Event');
        ep.startDate.sendKeys('10-01-2020');
        ep.btnSave.click();
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    it('Enter valid event name, select Start Date greaterthan End Date and save', function(){
        ep.eventsMenuClick();
        browser.sleep(1000);
        ep.btnAddNew.click();
        ep.eventName.sendKeys('Test Event');
        ep.startDate.click();
        ep.selectDate(21);
        ep.endDate.click();
        ep.selectDate(14);
        ep.btnSave.click();
        var dateValidation = element(by.id('swal2-content'));
        expect(dateValidation.getText()).toEqual('Start date should be less than or equal to End date.');
        
    })
   
})