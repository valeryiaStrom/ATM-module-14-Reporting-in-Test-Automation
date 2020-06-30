@jobSearch
Feature: Job Search

@bvt
Scenario: Homepage Title
Given I am on the page with the URL "https://www.epam.com "
Then page title is "EPAM | Enterprise Software Development, Design & Consulting"

@cpt
Scenario Outline:  Job Search returns 9 job offers for Test Engineers positions from Minsk
Given I am on the page with the URL "<URL>"
When I click on an element by selector "<careersBtnSelector>"
When I wait until element by selector "<jobSearchFormSelector>" is shown
When I enter "<keyword>" in a field by selector "<keywordFieldSelector>"
When I click on an element by selector "<locationComboboxSelector>"
When I enter "<location>" in a field by selector "<locationComboboxSelector>"
When I wait until element by selector "<targetLocationSelector>" is shown
When I click on an element by selector "<targetLocationSelector>"
When I click on an element by selector "<departmentCheckboxSelector>"
When I wait until element by selector "<targetDepartmentSelector>" is shown
When I click on an element by selector "<targetDepartmentSelector>"
When I click on an element by selector "<submitBtnSelector>"
When I wait until element by selector "<searchResultsList>" is shown
Then the number of elements found by selector "<searchResultsItem>" is equal to "9"

Examples:
| URL                  | careersBtnSelector                      | jobSearchFormSelector | keyword | keywordFieldSelector | locationComboboxSelector                  | location | targetLocationSelector                   | departmentCheckboxSelector              | department                | targetDepartmentSelector                                                   | submitBtnSelector                | searchResultsList      | searchResultsItem    |
| https://www.epam.com | .top-navigation__item [href='/careers'] | form.job-search__form | Test    | input[id*='keyword'] | [class$='location'] span[role='combobox'] | Minsk    | [id$='location-results'] li[id$='Minsk'] | [class*='departments'][role='combobox'] | Software Test Engineering |.multi-select-dropdown input[data-value='Software Test Engineering'] + span | button.recruiting-search__submit | .search-result__list   | .search-result__item |
