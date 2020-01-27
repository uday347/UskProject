let programsPage = require('../pages/programs');
var pp = new programsPage();
var RequiredValidations = element.all(by.css('span[class="validation-field-message"]'));
describe('Programs', function(){
    
    xit('save with empty data', function(){
        pp.programMenuClick();
        browser.sleep(1000);
        pp.addNewClick();
        pp.saveClick();
        expect(RequiredValidations.get(0).getText()).toEqual('* Program Name Required');
        expect(RequiredValidations.get(1).getText()).toEqual('* Start Date Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* End Date Required');
    })
    it('Enter valid program name, select Start Date greaterthan End Date and save', function(){
        pp.programMenuClick();
        browser.sleep(1000);
        pp.addNewClick();
        pp.enterProgramName('Program A');
        pp.startDate.click();
        pp.CalenderRightrArrow.click();
        pp.selectDates(20);
        pp.endDate.click();
        pp.selectDates(16);
        pp.saveClick();
        browser.sleep(2000);
        var test= element(by.id('swal2-content'));
        expect(test.getText()).toEqual('Start date should be less than or equal to End date.');
       
    })
})