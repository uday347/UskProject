var loginPage = require('../pages/login.js');
var mastersPage = require('../pages/masters')
var XLreader = require('../utils/XLreader.js');
var ln= new loginPage();
var mn= new mastersPage();
let loginId = element(by.id('email'));
describe('USK Martial Arts login functionality',function() {
  
  browser.ignoreSynchronization = true;
    
    xit('Enter URL', function() {
      ln.get('http://3.86.123.244/#/login');
      browser.manage().window().maximize();
      var zzz=browser.getTitle();
      expect(zzz).toEqual('Login - USK Martial Arts');
    })
       
    it('Login test with valid credentails', function() {
      ln.get('http://159.203.182.65/#/login');
      
      mn.sendKeysValue(loginId, 'Superadmin@gmail.com')
      //ln.enterLoginId('Superadmin@gmail.com');
      ln.enterPassword('P@assword1');
      ln.loginBtn();
      browser.sleep(2500);
      var zzz=browser.getTitle();
      expect(zzz).toEqual('Dashboard - USK Martial Arts');
    })

    xit('click on login without credentials', function() {
      ln.get('http://18.235.120.44/#/login');
      browser.manage().window().maximize();
      //ln.enterLoginId();
      //ln.enterPassword();
      ln.loginBtn();
      browser.sleep(1500);
      var zzz=element(by.xpath('//*[@id="login"]/div/div/div/div/div/div/div/div[2]/div[1]/span'));
      expect(zzz.getText()).toEqual('Please enter email and password');
    })

    xit('click on login with invalid email format', function() {
      ln.get('http://18.235.120.44/#/login');
      browser.manage().window().maximize();
      //ln.enterLoginId(Key.chord(Key.CONTROL, 'a'));
      ln.enterLoginId('test');
      //ln.enterPassword(Key.chord(Key.CONTROL, 'a'));
      ln.enterPassword('123456');
      ln.loginBtn();
      browser.sleep(1500);
      //var zzz=browser.getTitle();
      var zzz=element(by.xpath('//*[@id="login"]/div/div/div/div/div/div/div/div[2]/div[1]/span'));
      expect(zzz.getText()).toEqual('Please enter a valid email');
    })

    xit('click on login with invalid email id: not registered', function() {
      ln.get('http://18.235.120.44/#/login');
      browser.manage().window().maximize();
      ln.enterLoginId('test@test.com');
      ln.enterPassword('123456');
      ln.loginBtn();
      browser.sleep(1500);
      //var zzz=browser.getTitle();
      var zzz=element(by.xpath('//*[@id="login"]/div/div/div/div/div/div/div/div[2]/div[1]/span'));
      expect(zzz.getText()).toEqual('Invalid user credentials.');
    })

    xit('click on login with valid email id and Invalid password', function() {
      ln.get('http://18.235.120.44/#/login');
      browser.manage().window().maximize();
      ln.enterLoginId('Superadmin@gmail.com');
      ln.enterPassword('123456');
      ln.loginBtn();
      browser.sleep(1500);
      //var zzz=browser.getTitle();
      var zzz=element(by.xpath('//*[@id="login"]/div/div/div/div/div/div/div/div[2]/div[1]/span'));
      expect(zzz.getText()).toEqual('Invalid user credentials.');
    })

});
