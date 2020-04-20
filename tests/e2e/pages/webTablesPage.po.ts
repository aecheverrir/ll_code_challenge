import { $, by, element, ElementFinder } from "protractor";

export class WebTablesPageObject {
    public addUserButton: ElementFinder;
    public firstRow: ElementFinder;

    constructor() {
        this.addUserButton = element(by.css("table button[type='add']"));
    }

    async searchForUserNameInTable(username: string): Promise<boolean> {
        let tableRows = await element.all(by.className('smart-table-data-row ng-scope'));
        for (let row of tableRows) {
            let userNameCell = await row.all(by.className('smart-table-data-cell')).get(2);
            if(await userNameCell.getText() == username){  
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(false);
    }

    async removeUserInTable(username: string): Promise<boolean> {
        let tableRows = await element.all(by.className('smart-table-data-row ng-scope'));
        for (let row of tableRows) {
            let userNameCell = await row.all(by.className('smart-table-data-cell')).get(2);
            if(await userNameCell.getText() == username){  
                let deleteCell = await row.all(by.className('smart-table-data-cell')).get(10);
                let deleteButton = await deleteCell.element(by.className('btn btn-link'));
                await deleteButton.click();
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(false);
    }
    
    /*
    async clickOnDeleteUser(userName) {
        return new Promise(
          async function(resolve, reject) {
            let tableRows = await browser.findElements(this.TABLE_DATA_SELECTOR);
            for (let row of tableRows) {
              let rowUserName = await row.findElement(By.css(":nth-child(3)"));
              if ((await rowUserName.getText()) == userName) {
                let deleteButton = await row.findElement(
                  By.css("button[ng-click='delUser()']")
                );
                await deleteButton.click();
                resolve();
              }
            }
            reject();
          }.bind(this)
        );
      }
      */
}

export class CreateUserModalPageObject {
    public modalHeader: ElementFinder;
    public firstNameInput: ElementFinder;
    public userNameInput: ElementFinder;
    public emailInput: ElementFinder;
    public cellphoneInput: ElementFinder;
    public roleDropdown: ElementFinder;
    public roleOption1: ElementFinder;
    public saveButton: ElementFinder;

    constructor() {
        this.modalHeader = element(by.className("modal-header"));
        this.firstNameInput = element(by.name("FirstName"));
        this.userNameInput = element(by.name("UserName"));
        this.emailInput = element(by.name("Email"));        
        this.cellphoneInput = element(by.name("Mobilephone"));
        this.roleDropdown = element(by.name("RoleId"));
        this.roleOption1 = this.roleDropdown.element(by.css('[value="0"]'));
        this.saveButton = element(by.className('btn btn-success'))
    }
}

export class DeleteUserModalPageObject {
    public okButton: ElementFinder;

    constructor() {
        this.okButton = element(by.className("btn ng-scope ng-binding btn-primary"));
    }
}
