// test/pageobjects/estimate.page.js

class EstimatePage {

    // Navigation
    get widgetTab() {
         return $('(//android.widget.Button)[1]');
    }
    get estimateTab() {
        return $('//android.view.View[@content-desc="Estimates"]');
    }
/*
    get createEstimateBtn() {
       return $('(//android.widget.Button)[2]');
    }
*/

    async tapCreateEstimateBtn() {
    await browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: 966, y: 2156 },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 100 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await browser.releaseActions();
}

    // Customer
    get customerField() {
        return $('//android.widget.ScrollView/android.view.View[3]');
    }

    get selectCustomer() {
        return $('//android.widget.Button[@content-desc="Makrer Enterprises LLC"]');
    }

    // Item
    get addItemBtn() {
        return $('//android.view.View[@content-desc="Add new item"]');
    }

    get selectItem() {
        return $('//android.view.View[contains(@content-desc,"Screen Laptop") and contains(@content-desc,"Goods")]');
    }

    get selectItemBtn() {
        return $('//android.widget.Button[@content-desc="SELECT ITEM"]');
    }

    // Save
    get saveAndGoBackBtn() {
        return $('//android.view.View[@content-desc="SAVE & GO BACK"]');
    }

    // Dates
    get estimateDateField() {
        return $('//android.view.View[@content-desc="Select Estimate Date"]');
    }

    get expiryDateField() {
        return $('//android.view.View[@content-desc="Select Expiry Date"]');
    }

    get selectDate() {
        return $('//android.widget.Button[contains(@content-desc,"1,")]');
    }

    get selectNextDate() {
        return $('//android.widget.Button[contains(@content-desc,"2,")]');
    }

    get okBtn() {
        return $('//android.widget.Button[@content-desc="OK"]');
    }

    get saveDraftBtn() {
        return $('//android.view.View[@content-desc="SAVE AS DRAFT"]');
    }

    get goBackToEstimatesBtn() {
    return $('//android.view.View[@content-desc="Go Back to Estimates"]');
}

    // Scroll (reuse same logic)
    async scrollUp() {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 1400 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 600, x: 500, y: 900 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await browser.releaseActions();
    }

    // Flow Methods
    async openWidgetTab() {
        await this.widgetTab.waitForDisplayed({ timeout: 10000 });
        await this.widgetTab.click();
    }

    async openEstimateTab() {
        await this.estimateTab.waitForDisplayed({ timeout: 10000 });
        await this.estimateTab.click();
    }
/*
    async createEstimate() {
        await this.createEstimateBtn.waitForDisplayed({ timeout: 10000 });
        await this.createEstimateBtn.click();
    }
    */
    async createEstimate() {
    await browser.pause(1000);
    await this.tapCreateEstimateBtn();

    await this.customerField.waitForDisplayed({ timeout: 10000 });
}

    async chooseCustomer() {
        await this.customerField.click();
        await this.selectCustomer.click();
    }

    async addItem() {
        await this.addItemBtn.click();
        await this.selectItem.click();
        await this.selectItemBtn.click();
    }

    async saveAndGoBack() {
        await this.saveAndGoBackBtn.click();
    }

    async selectEstimateDate() {
        for (let i = 0; i < 5; i++) {
            if (await this.estimateDateField.isDisplayed()) break;
            await this.scrollUp();
        }

        await this.estimateDateField.click();
        await this.selectDate.click();
        await this.okBtn.click();
    }

    async selectExpiryDate() {
        for (let i = 0; i < 5; i++) {
            if (await this.expiryDateField.isDisplayed()) break;
            await this.scrollUp();
        }

        await this.expiryDateField.click();
        await this.selectNextDate.click();
        await this.okBtn.click();
    }

    async saveAsDraft() {
        for (let i = 0; i < 5; i++) {
            if (await this.saveDraftBtn.isDisplayed()) break;
            await this.scrollUp();
        }

        await this.saveDraftBtn.click();
    }
    async goBackToEstimates() {

    // wait properly (important after save)
    await this.goBackToEstimatesBtn.waitForDisplayed({ timeout: 10000 });

    await browser.pause(500); // UI stabilization (Flutter)

    await this.goBackToEstimatesBtn.click();
}
}

module.exports = new EstimatePage();