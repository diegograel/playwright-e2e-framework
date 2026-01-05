import {Page, Locator} from '@playwright/test';

export class LoginPage {
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    greetingMessage: Locator;
    loginPageButton: Locator;

    constructor(private page: Page) {
        this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.greetingMessage = this.page.getByRole('heading', { name: /Hi, / });
        this.loginPageButton = this.page.getByRole('link', { name: 'Test Login Page' });
    }

    async goto(){
        await this.page.goto('https://practice.expandtesting.com/');
        await this.loginPageButton.scrollIntoViewIfNeeded();
        await this.loginPageButton.click();
    }

    async login(username: string, password: string){    
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getGreetingMessage(){
        return (await this.greetingMessage.textContent()) ?? '';
    }
}