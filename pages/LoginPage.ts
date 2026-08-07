import{Page, Locator} from "@playwright/test"


export class LoginPage
{
    private readonly page:Page;
    private readonly txtEmailAddress:Locator
    private readonly txtPassword:Locator
    private readonly btnLogin:Locator
    private readonly errorMsg:Locator;



    constructor(page:Page)
    {
        this.page = page;
        this.txtEmailAddress = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.txtPassword = page.getByLabel('Password');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
        this.errorMsg = page.locator(".alert.alert-danger.alert-dismissible");
    }


    async setEmailAddress(email:string)
    {
        await this.txtEmailAddress.fill(email);
    }

    async setPassword(password:string)
    {
        await this.txtPassword.fill(password);
    }

    async clickLoginButton()
    {
        await this.btnLogin.click();
    }

    async login(email:string, password:string)
    {
        await this.txtEmailAddress.fill(email);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }

    async errorMessage():Promise<null|string>
    {
        return this.errorMsg.textContent();
    }

}
