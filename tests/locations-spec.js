let locationsPage = require('../pages/locations');
var lp = new locationsPage();
var RequiredFieldValidations = element.all(by.css('span[class="validation-field-message"]'));
describe('locations', function(){

    it('save with empty data', function(){
        lp.locationMenu();
        browser.sleep(1000);
        lp.addNew();
        lp.saveClick();
        expect(RequiredFieldValidations.get(0).getText()).toEqual('* Location Name is required');
        expect(RequiredFieldValidations.get(1).getText()).toEqual('* Contact Number is Required');
    })
})