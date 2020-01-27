let mastersPage = require('../pages/masters');

var mn= new mastersPage();
var RequiredValidations= element.all(by.css('span[class="validation-field-message"]'));
describe('master', function(){

    it('click on save without giving any data', function(){
        mn.mastersMenu();
        browser.sleep(1000);
        mn.addNew();
        mn.saveClick();
        //browser.sleep(3000);
        expect(RequiredValidations.get(0).getText()).toEqual('* First Name Required');
        expect(RequiredValidations.get(1).getText()).toEqual('* Last Name Required');
        expect(RequiredValidations.get(2).getText()).toEqual('* Phone Number Required');
        expect(RequiredValidations.get(3).getText()).toEqual('');
        expect(RequiredValidations.get(4).getText()).toEqual('* Email Required');
        expect(RequiredValidations.get(5).getText()).toEqual('* Password Required');
        expect(RequiredValidations.get(6).getText()).toEqual('* Confirm Password Required');
        
    })
})