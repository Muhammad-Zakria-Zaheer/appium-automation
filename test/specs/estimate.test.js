const EstimatePage = require('../pageobjects/estimate.page');

describe('Estimate Flow', () => {

    it('should create estimate', async () => {
        await EstimatePage.openWidgetTab();

        await EstimatePage.openEstimateTab();

        await EstimatePage.createEstimate();

        await EstimatePage.chooseCustomer();

        await EstimatePage.addItem();

        await EstimatePage.saveAndGoBack();

        await EstimatePage.selectEstimateDate();

        await EstimatePage.selectExpiryDate();

        await EstimatePage.saveAsDraft();
        
        await EstimatePage.goBackToEstimates();
        

    });

});