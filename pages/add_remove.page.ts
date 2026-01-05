import {Page, Locator} from '@playwright/test';

export class AddRemovePage {
    searchBox: Locator;
    addRemovePageButton: Locator;
    addButton: Locator;
    deleteButton: Locator;
    searchButton: Locator;

    constructor(private page: Page) {
        this.addRemovePageButton = this.page.getByRole('link', { name: 'Add/Remove Elements' });
        this.searchBox = this.page.getByRole('textbox', { name: 'Search an example...' });
        this.addButton = this.page.getByRole('button', { name: 'Add Element' });
        this.deleteButton = this.page.getByRole('button', { name: 'Delete' });
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
    }

    async goto(){
        await this.page.goto('https://practice.expandtesting.com/');
    }

    async search(element: string){
        
        await this.searchBox.fill(element);
        await this.searchButton.click();
        await this.addRemovePageButton.click();
    }

    async addElement(){
        await this.addButton.click();
    }

    async removeElement(){
        await this.deleteButton.click();
    }
}