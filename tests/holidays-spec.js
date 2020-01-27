let holidaysPage = require('../pages/holidays');
var hd = new holidaysPage();

var RequiredValidations= element.all(by.css('span[class="validation-field-message"]'));
describe('holidays', function(){
    it('Holiday save', function(){
        hd.holidayMenu();
        browser.sleep(3000);
        hd.addHoliday();
        hd.saveClick();
        expect(RequiredValidations.get(0).getText()).toEqual('* Holiday Name Required');
        expect(RequiredValidations.get(1).getText()).toEqual('* Holiday Date Required');
    })

    xit('select Date and Empty Holiday name', function(){
        hd.holidayMenu();
        browser.sleep(3000);
        hd.addHoliday();
        hd.holidayNameInput('');
        hd.holidayDateSelect('03-03-2020');
        browser.sleep(3000);
        hd.saveClick();
        expect(RequiredValidations.get(0).getText()).toEqual('* Holiday Name Required');
    })
})