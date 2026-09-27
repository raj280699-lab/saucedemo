import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async verifyProduct() {

        await expect(
            this.page.locator('.inventory_item_name')
        ).toContainText('Sauce Labs Bolt T-Shirt');
    }

    async checkout() {
        await this.page.click('#checkout');
    }

    async enterCheckoutInfo() {

        await this.page.fill(
            '#first-name',
            'Raj'
        );

        await this.page.fill(
            '#last-name',
            'Kumar'
        );

        await this.page.fill(
            '#postal-code',
            '625001'
        );

        await this.page.click('#continue');
    }

    async finishOrder() {

        await this.page.click('#finish');
    }

    async verifyOrderSuccess() {

        await expect(
            this.page.locator('.complete-header')
        ).toContainText(
            'Thank you for your order!'
        );
    }
}