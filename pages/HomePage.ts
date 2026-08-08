import{Page, expect, Locator} from "@playwright/test"


export class HomePage
{
    private readonly page:Page;
    //locators
    private readonly linkMyAccount: Locator;
    private readonly linkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly linkSearchBox: Locator;
    private readonly btnSearch: Locator;


    //constructors
    constructor(page:Page)
    {
        this.page = page;
        this.linkMyAccount = page.locator('span:has-text("My Account")');
        this.linkRegister = page.getByRole('link', { name: 'Register' });
        this.linkLogin = page.getByRole('link', { name: 'Login' });
        this.linkSearchBox = page.getByRole('textbox', { name: 'Search' });
        this.btnSearch = page.locator('button.btn.btn-default.btn-lg');
    }

    //action methods

    async isHomePageExists()
    {
        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    async clickMyAccount()
    {
        try
        {
           await this.linkMyAccount.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'My Account' :${error}`);
            throw error;
        }
    }

    async clickRegister()
    {
        try
        {
           await this.linkRegister.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'Regsiter' :${error}`);
            throw error;
        }
    }

    async clickLogin()
    {
        try
        {
           await this.linkLogin.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'Login' :${error}`);
            throw error;
        }
    }

    async enterProductName(product:string)
    {
        try
        {
           await this.linkSearchBox.fill(product);
        }
        catch(error)
        {
            console.log(`Exception occured while entering product name :${error}`);
            throw error;
        }
    }

    async clickSearch()
    {
        try
        {
           await this.btnSearch.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'Search button' :${error}`);
            throw error;
        }
    }

}