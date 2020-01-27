let login = function() {
let loginId = element(by.id('email'));
let password = element(by.id('password'));
let submit =element(by.buttonText('Login'));

this.get=function(url){
    browser.get(url);
}
this.enterLoginId = function(userName){
    loginId.clear().sendKeys(userName);
    //loginId.sendKeys(protrator.Key.chord(protrator.Key.CONTROL, 'a'));
}
this.enterPassword =function(password1){
    password.sendKeys(password1);
}
this.loginBtn=function(){
    submit.click();
}

}
module.exports=login;