import { expect } from '@playwright/test';

export default class DashBoardPage {
  constructor(page) {
    this.page = page;
  }

  tabSelector(tab) {
    return this.page.getByRole('button', { name: `${tab}`});
  }

  taskSelector(task) {
    return this.page.getByRole('heading', { name: `${task}`});
  }

  columnSelector(column) {
    return this.page.locator('#root div').filter({ hasText: `${column}`}).nth(3);
  }

  tagSelector(tag) {
    return this.page.getByText(`${tag}`).first();        
  }
  
  async navigateToTab(tab) {
    await this.tabSelector(tab).click();
  }

  async verifyTaskInColumn(task, column) {
    const columnLocator = this.columnSelector(column);
    const taskLocator = columnLocator.locator(this.taskSelector(task));
    await expect(taskLocator).toBeVisible();
  }

  async verifyTags(task, expectedTags) {
    const taskLocator = this.taskSelector(task);
    await taskLocator.waitFor(); 
    await expect(taskLocator).toBeVisible();
        
    for (const tag of expectedTags) {
      const tagLocator = this.tagSelector(tag);
      await tagLocator.waitFor(); 
      await expect(tagLocator).toBeVisible();
    }
  }
}
