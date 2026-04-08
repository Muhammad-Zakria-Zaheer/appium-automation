// test/specs/invoice.test.js

const InvoicePage = require('../pageobjects/invoice.page');

describe('Invoice Flow', () => {

    it('should create invoice with item', async () => {

         await InvoicePage.openInvoiceTab();

    await InvoicePage.clickCreateInvoice();

    await InvoicePage.chooseCustomer();

    await InvoicePage.addItem();

    await InvoicePage.saveAndGoBack();

    await InvoicePage.selectInvoiceDate();

    await InvoicePage.saveAsDraft();
    
    await InvoicePage.goBackToInvoices();

    });

});