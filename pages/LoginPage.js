export default class LoginPage {
    constructor (page) {
        this.page = page;
        this.userNameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('load');          
        await this.page.waitForSelector('text=Web Application', { timeout: 30000 });               
    }
}
