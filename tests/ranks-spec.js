let ranksPage= require('../pages/ranks')
var rp= new ranksPage();
var requiredValidations = element.all(by.css('span[class="validation-field-message"]'));

describe('Ranks', function(){

    it('click on save with empty data', function(){
        rp.ranksMenu();
        browser.sleep(1000);
        rp.addNewClick();
        //browser.sleep(3000);
        rp.saveClick();
        //browser.sleep(3000);
        expect(requiredValidations.get(0).getText()).toEqual('Title Required');
        expect(requiredValidations.get(1).getText()).toEqual('Test Fee Required');
        expect(requiredValidations.get(2).getText()).toEqual('Penalty Days Required');
        expect(requiredValidations.get(3).getText()).toEqual('Penalty Amount Required');
    })

    
})