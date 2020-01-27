let merchantsPage = require('../pages/merchants');
let loginPage = require('../pages/login');
var login = new loginPage();
var mp = new merchantsPage();
var messageVerify = element(by.id('swal2-content'));
var RequiredValidations = element.all(by.css('span[class="validation-field-message"]'));
var btnOK = element(by.buttonText('OK'));
describe('merchants', function(){
    
    beforeAll(function(){
        login.get('http://159.203.182.65/#/login');
        login.enterLoginId('Superadmin@gmail.com');
        login.enterPassword('P@assword1');
        login.loginBtn();
    });
    
    xit('verify page title', function(){
        mp.merchantsMenuClick();
        browser.sleep(1000);
        var titleM = browser.getTitle();
        expect(titleM).toEqual('Products List - USK Martial Arts');
    });

    xit('Save with empty data', function(){
        mp.merchantsMenuClick();
        browser.sleep(1000);
        mp.addNewClick();
        browser.sleep(2000);
        //mp.categorySelect(1);
        //browser.sleep(3000);
        mp.saveClick();
        browser.sleep(2000);
        
        expect(RequiredValidations.get(0).getText()).toEqual('Category Required');
        expect(RequiredValidations.get(1).getText()).toEqual('Product Name Required');
        expect(RequiredValidations.get(2).getText()).toEqual('Product Price Required');
        expect(RequiredValidations.get(3).getText()).toEqual('Product Quantity Required');
        mp.closeClick();
    });
    
    xit('save record', function(){
        mp.merchantsMenuClick();
        browser.sleep(1000);
        mp.addNewClick();
        browser.sleep(1000);
        mp.categorySelect(0);
        mp.enterProductName('Product');
        mp.enterProductPrice('75');
        mp.enterProductQuantity('5');
        mp.enableClick();
        mp.saveClick();
        browser.sleep(1000);
        expect(messageVerify.getText()).toEqual('New product created successfully');
        btnOK.click();
    })
    
    it('Edit record', function(){
        mp.merchantsMenuClick();
        browser.sleep(4000);
        mp.editbtn.get(2).click();
        browser.sleep(1000);
        mp.updatebtn.click();
        browser.sleep(1000);
    })
})