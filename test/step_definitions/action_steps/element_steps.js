const { When, setDefaultTimeout } = require('cucumber');
const EC = protractor.ExpectedConditions;
setDefaultTimeout(60000);

When(/^I click on an element by selector "([^"]*)"$/, function(elementSelector) {
  const targetElement = element(by.css(elementSelector));
  return targetElement.click();
});

When(/^I wait until element by selector "([^"]*)" is shown$/, function(elementSelector) {
  const targetElement = element(by.css(elementSelector));
  return browser.wait(EC.visibilityOf(targetElement), 5000);
});

When(/^I enter "([^"]*)" in a field by selector "([^"]*)"$/, function(input, fieldSelector) {
  const targetField = element(by.css(fieldSelector));
  return targetField.sendKeys(input);
});
