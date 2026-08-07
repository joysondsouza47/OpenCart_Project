import {Page, expect, Locator}  from "@playwright/test"


export class RegistrationPage 
{

 private readonly page:Page;
 //locators
 private readonly txtFirstName: Locator;
 private readonly txtLastName: Locator;
 private readonly txtEmail: Locator;
 private readonly txtPassword: Locator;
 private readonly chkPolicy: Locator;
 private readonly btnContinue: Locator;
 private readonly msgConfirmation: Locator;
 
 constructor(page:Page)
 {
    this.page = page;
    // initializing locators
    this.txtFirstName = page.locator('#input-firstname');
    this.txtLastName = page.locator("//input[@id='input-lastname']");
    this.txtEmail = page.locator("//input[@id='input-email']");
    this.txtPassword = page.locator("//input[@id='input-password']");
    this.chkPolicy = page.locator("//input[@name='agree']");
    this.btnContinue = page.getByRole('button', { name: 'Continue' });
    this.msgConfirmation = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
 }


 async setFirstName(fname:string):Promise<void>
 {
    await this.txtFirstName.fill(fname);
 }

  async setLastName(lname:string):Promise<void>
 {
    await this.txtLastName.fill(lname);
 }
  async setEmail(email:string):Promise<void>
 {
    await this.txtEmail.fill(email);
 }
  async setPassword(pwd:string):Promise<void>
 {
    await this.txtPassword.fill(pwd);
 }
  async PrivacyCheck():Promise<void>
 {
    await this.chkPolicy.check();
 }
  async clickContinueButton():Promise<void>
 {
    await this.btnContinue.click();
 }
  async setMsgConfirmation():Promise<string>
 {
    return await this.msgConfirmation.textContent() ?? '';
 }

 async completeRegistration(userData: {
    firstName: string;
    lastname:string;
    email:string;
    password:string;
 }):Promise<string>
 {
      await this.setFirstName(userData.firstName);
      await this.setLastName(userData.lastname);
      await this.setEmail(userData.email);
      await this.setPassword(userData.password);
      await this.PrivacyCheck();
      await this.clickContinueButton();
      return await this.setMsgConfirmation();
 }
}

// in progress