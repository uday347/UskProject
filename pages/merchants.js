let merchants = function(){

var merchantsMenu = element(by.className('ft-merchants'));
var btnAddNew = element(by.css('div[class="col-10 text-right tbl-search"]')).all(by.tagName('a')).get(0);
this.category = element(by.id('categoryId'));
var productName = element(by.id('productName'));
var productPrice = element(by.id('price'));
var prodQuantity = element(by.id('quantity'));
var productImage = element(by.id('productImgPath'));
var statusEnable = element(by.css('div[class="input-group text-right"]')).all(by.tagName('label')).get(0);
//var statusEnable = element(by.id('Enable'));
var statusDisable = element(by.id('Disable'));
var description = element(by.id('description'));
var btnSave = element(by.buttonText('Save'));
var btnClose = element(by.buttonText('Close'));
//var btnEdit = element(by.css('div[class="datatable-body-cell-label"]')).all(by.tagName('button'));
//var btnEdit = element(by.css('div[class="visible"]')).all(by.tagName('button'));
//var btnEdit = element(by.className('datatable-scroll ng-star-inserted')).all(by.css('datatable-row-wrapper[class="datatable-row-wrapper ng-star-inserted"]'));
this.tabledata = element(by.css('datatable-body[class="datatable-body"]')).all(by.tagName('datatable-row-wrapper'));
this.row=this.tabledata.all(by.css('div[class="datatable-body-cell-label"]'));
this.editbtn=this.row.all(by.css('button[title="Edit"]'));
this.updatebtn= element(by.css('button[class="btn btn-blue square btn-min-width mb-0"]'));

this.merchantsMenuClick = function(){
    browser.executeScript("arguments[0].scrollIntoView();", merchantsMenu.getWebElement());
    merchantsMenu.click();
}

this.addNewClick = function(){
    btnAddNew.click();
}

this.categorySelect = function(catValue){
    //category.click();
    element(by.id('categoryId')).all(by.tagName('option')).get(catValue).click();
}
this.enterProductName = function(product){
    productName.sendKeys(product);
}
this.enterProductPrice = function(pPrice){
    productPrice.sendKeys(pPrice);
}
this.enterProductQuantity = function(Qty){
    prodQuantity.sendKeys(Qty);
}
this.selectFile = function(imagePath){
    productImage.sendKeys(imagePath);
}
this.enableClick = function(){
    statusEnable.click();
}
this.disableClick = function(){
    statusDisable.click();
}
this.enterDescription = function(desc){
    description.sendKeys(desc)
}
this.saveClick = function(){
    btnSave.click();
}
this.closeClick = function(){
    btnClose.click();
}
this.editClick =function(id){
    btnEdit.get(id).click();
}
}
module.exports=merchants;