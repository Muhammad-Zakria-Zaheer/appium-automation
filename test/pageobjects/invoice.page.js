// test/pageobjects/invoice.page.js

class InvoicePage {

    get invoiceTab() {
        return $('//android.view.View[@content-desc="INVOICE"]');
    }

    get createInvoiceBtn() {
        return $('//android.widget.Button[@content-desc="CREATE NEW INVOICE"]');
    }

    get customerField() {
        return $('//android.widget.ScrollView/android.view.View[3]');
    }

    get selectCustomer() {
        return $('//android.widget.Button[@content-desc="Makrer Enterprises LLC"]');
    }

    get addItemBtn() {
        return $('//android.view.View[@content-desc="Add new item"]');
    }

    get selectItemRadio() {
        return $('//android.view.View[contains(@content-desc,"Screen Laptop") and contains(@content-desc,"Goods")]')
    }

    get selectItemBtn() {
        return $('//android.widget.Button[@content-desc="SELECT ITEM"]');
    }
       get saveAndGoBackBtn() {
    return $('//android.view.View[@content-desc="SAVE & GO BACK"]');
}

get invoiceDateField() {
    return $('//android.view.View[@content-desc="Select Invoice Date"]');
}

get selectDate() {
  
    return $('//android.widget.Button[contains(@content-desc,"1,")]');

}

get okBtn() {
    return $('//android.widget.Button[@content-desc="OK"]');
}

get saveDraftBtn() {
    return $('//android.view.View[@content-desc="SAVE AS DRAFT"]');
}
get goBackToInvoicesBtn() {
    return $('//android.view.View[@content-desc="Go Back to Invoices"]');
}
async scrollUp() {
    await browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: 500, y: 1400 },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 300 },
            { type: 'pointerMove', duration: 800, x: 500, y: 900 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await browser.releaseActions();

}
    async openInvoiceTab() {
        await this.invoiceTab.waitForDisplayed({ timeout: 10000 });
        await this.invoiceTab.click();
    }

    async clickCreateInvoice() {
        await this.createInvoiceBtn.waitForDisplayed({ timeout: 10000 });
        await this.createInvoiceBtn.click();
    }

    async chooseCustomer() {
        await this.customerField.waitForDisplayed({ timeout: 10000 });
        await this.customerField.click();
        await this.selectCustomer.waitForDisplayed({ timeout: 10000 });
        await this.selectCustomer.click();
    }

    async addItem() {
        await this.addItemBtn.waitForDisplayed({ timeout: 10000 });
        await this.addItemBtn.click();
        await this.selectItemRadio.waitForDisplayed({ timeout: 10000 });
        await this.selectItemRadio.click();
        await this.selectItemBtn.waitForDisplayed({ timeout: 10000 });
        await this.selectItemBtn.click();
    }


async saveAndGoBack() {
    await this.saveAndGoBackBtn.waitForDisplayed({ timeout: 10000 });
    await this.saveAndGoBackBtn.click();
}

async selectInvoiceDate() {

    // Try multiple scrolls until visible
    for (let i = 0; i < 5; i++) {
        if (await this.invoiceDateField.isDisplayed()) break;
        await this.scrollUp();
    }

    await this.invoiceDateField.click();

    await this.selectDate.waitForDisplayed({ timeout: 10000 });
    await this.selectDate.click();

    await this.okBtn.click();
}

async saveAsDraft() {

    // scroll again if needed
    //await browser.$(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("SAVE AS DRAFT"))`);
        

    await this.saveDraftBtn.waitForDisplayed({ timeout: 10000 });
    await this.saveDraftBtn.click();
}
async goBackToInvoices() {

    // wait properly (important after save)
    await this.goBackToInvoicesBtn.waitForDisplayed({ timeout: 10000 });

    await browser.pause(500); // UI stabilization (Flutter)

    await this.goBackToInvoicesBtn.click();
}
}

module.exports = new InvoicePage();