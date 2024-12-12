import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashBoardPage from '../pages/DashBoardPage';
import data from '../data/testCases.json';

test.describe('Asana Task Automation', () => {
    let loginPage;
    let dashBoardPage; 

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashBoardPage = new DashBoardPage(page);

        await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
        await loginPage.login(data.credentials.username, data.credentials.password);        
    });

    for (const { tab, task, column, tags } of data.testCases) {
        test(`Verify task "${task}" in "${tab}"`, async () => {
            await dashBoardPage.navigateToTab(tab);        
            await dashBoardPage.verifyTaskInColumn(task, column);
            await dashBoardPage.verifyTags(task, tags);
        });
     };
});
