const { When, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60000);

When(/^I am on the page with the URL "([^"]*)"$/, function(url) {
  return browser.get(url);
});
