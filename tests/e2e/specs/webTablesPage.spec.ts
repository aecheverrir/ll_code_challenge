import { browser } from "protractor";
import { WebTablesPageObject, CreateUserModalPageObject, DeleteUserModalPageObject } from "../pages/webTablesPage.po";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const tablesPO: WebTablesPageObject = new WebTablesPageObject();
const createModalPO: CreateUserModalPageObject = new CreateUserModalPageObject();
const deleteModalPO: DeleteUserModalPageObject = new DeleteUserModalPageObject();

Given(/^I am on the Way2Automation web tables page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Protractor practice website - WebTables");
});

When(/^I click the Add User button$/, async () => {
    await tablesPO.addUserButton.click();
    await expect(createModalPO.modalHeader.isDisplayed)
});

When(/^I fill in the required fields$/, async () => {
    await createModalPO.firstNameInput.sendKeys('Alejandro');
    await createModalPO.userNameInput.sendKeys('aecheverri');
    await createModalPO.emailInput.sendKeys('test@testautomation.com');
    await createModalPO.cellphoneInput.sendKeys('3050505');
    await createModalPO.roleDropdown.click();
    await createModalPO.roleOption1.click();
});

When(/^I click Save$/, async () => {
    await createModalPO.saveButton.click();
});

Then(/^I should see the new account has been added$/, async () => {
    await expect(await tablesPO.searchForUserNameInTable('aecheverri')).to.be.true;
});

When(/^I click the x to remove an account$/, async () => {
    await tablesPO.removeUserInTable('matt');
});

When(/^I confirm I want to delete the user$/, async () => {
    await deleteModalPO.okButton.click();
});

Then(/^I should see the account has been deleted$/, async () => {
    await expect(await tablesPO.searchForUserNameInTable('matt')).to.be.false;   
});

//delete this (it's only to used to delay test auto because it runs too fast for debugging)
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


