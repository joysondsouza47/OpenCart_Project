import {Page, expect, Locator}  from "@playwright/test"


export class RegistrationPage 
{

 private readonly page:Page;
 //locators
 private readonly txtFirstName: Locator;
 private readonly txtLastName: Locator;
 private readonly txtEmail: Locator;
 private readonly txtPhonenumber: Locator;        //additional
 private readonly txtPassword: Locator;
 private readonly txtConfirmPassword: Locator;    //additional
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
    this.txtPhonenumber = page.getByRole('textbox', { name: 'Telephone' });   //additional
    this.txtPassword = page.locator("//input[@id='input-password']");
    this.txtConfirmPassword = page.getByLabel('Password Confirm');            //additional
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
 async setPhonenumber(phnumber:string):Promise<void>    //additional
 {
    await this.txtPhonenumber.fill(phnumber);
 }
  async setPassword(pwd:string):Promise<void>   
 {
    await this.txtPassword.fill(pwd);
 }
 async setConfirmPassword(confpwd:string):Promise<void>   //additional
 {
    await this.txtConfirmPassword.fill(confpwd);
 }
  async PrivacyCheck():Promise<void>
 {
    await this.chkPolicy.check();
 }
  async clickContinueButton():Promise<void>
 {
    await this.btnContinue.click();
 }
  async getConfirmationMsg():Promise<string>
 {
    return await this.msgConfirmation.textContent() ?? '';
 }

 async completeRegistration(userData: {
    firstName: string;
    lastname:string;
    email:string;
    phnumber : string;
    password:string;
 }):Promise<string>
 {
      await this.setFirstName(userData.firstName);
      await this.setLastName(userData.lastname);
      await this.setEmail(userData.email);
      await this.setPhonenumber(userData.phnumber);     //additional
      await this.setPassword(userData.password);
      await this.setConfirmPassword(userData.password);   //additional
      await this.PrivacyCheck();
      await this.clickContinueButton();
      return await this.getConfirmationMsg();
 }
}
