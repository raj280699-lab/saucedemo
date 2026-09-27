import { Page, expect } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    sortDropdown = '.product_sort_container';
    cartBadge = '.shopping_cart_badge';

    async sortLowToHigh() {
        await this.page.selectOption(
            this.sortDropdown,
            'lohi'
        );
    }

    async addCheapestProduct() {

        await this.page.click(
            '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
        );
    }

    async verifyCartCount() {
        await expect(
            this.page.locator(this.cartBadge)
        ).toHaveText('1');
    }

    async openCart() {
        await this.page.click('.shopping_cart_link');
    }
}