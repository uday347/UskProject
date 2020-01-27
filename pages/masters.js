let masters=function(){
    //var mastersElem = element(by.css('div[class="nav-container"]')).all(by.tagName('li')).get(19);
    var mastersElem = element(by.className('ft-users'));
    var btnAddMasters = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
    
    //var btnAddMasters = element(by.buttonText('Add New'));
    var firstName = element(by.id('firstName'));
    var lastName = element(by.id('lastname'));
    var phoneNumber = element(by.id('phonenumber'));
    var altNumber = element(by.id('alternatenumber'));
    var email = element(by.id('email'));
    var note = element(by.id('note'));
    var password = element(by.id('Password'));
    var confirmPassword = element(by.id('confirmPassword'));
    //var btnSave = element(by.buttonText('Save'));
    var btnSave = element(by.css('div[class="card-footer text-right"]')).all(by.tagName('a')).get(1);
    //var btnSave = element(by.xpath('/html/body/app-root/div/div/app-user/div/div/div/app-user-details/div[2]/div/div/div[2]/div[2]/a[2]'));
    var btnBack = element(by.buttonText('Back'));
    //var edit
    //var delete

    this.mastersMenu= function(){
        browser.executeScript("arguments[0].scrollIntoView();", mastersElem.getWebElement());
        mastersElem.click();
    }

    this.addNew=function(){
        btnAddMasters.click();
    }

    this.enterFName=function(fname){
        firstName.sendKeys(fname);
    }

    this.enterLName=function(lname){
        lastName.sendKeys(lname);
    }

    this.enterPhoneNumber=function(phone){
        phoneNumber.sendKeys(phone);
    }
    this.enterAlternateNumber=function(alterNumber){
        altNumber.sendKeys(alterNumber);
    }
    this.enterEmail=function(mailId){
        email.sendKeys(mailId);
    }
    this.enterNote=function(note1){
        note.sendKeys(note1);
    }
    this.enterPassword=function(pwd){
        password.sendKeys(pwd);
    }
    this.enterConfirmPassword=function(cpwd){
        confirmPassword.sendKeys(pwd);
    }
    this.saveClick=function(){
        btnSave.click();
    }
    this.backBtnClick=function(){
        btnBack.click();
    }
    this.sendKeysValue=function(TextBox, value){
    //function sendKeysValue(TextBox, value){
        TextBox.sendKeys(value);
       }
}
module.exports=masters;