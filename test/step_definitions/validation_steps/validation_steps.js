const { Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);

Then(/^page title is "([^"]*)"$/, async function(expectedPageTitle) {
  const actualPageTitle = await browser.getTitle();
  expect(actualPageTitle).to.be.equal(expectedPageTitle);
});

Then(/^the number of elements found by selector "([^"]*)" is equal to "([^"]*)"$/, async function(elementSelector, expectedQuantity) {
  const expectedNumberOfElements = parseInt(expectedQuantity);
  const actualQuantity = element.all(by.css(elementSelector));
  const actuaNumberOfelements = await actualQuantity.count();
  expect(actuaNumberOfelements).to.be.equal(expectedNumberOfElements);
});