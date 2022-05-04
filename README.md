`playwright.config.js` contains the playwirght configurations such as timeouts and retries for failed tests

while at  `//playwrightExample`
Setup
 Run `npm init playwright`

To run the tests 
`npx playwright test --headed` or   `npx playwright test` for headless mode

To see the report after executing the tests
`npx playwright show-report`

By default it now runs test against Chromium, Firefox and WebKit, this can be configured at playwright.config.js


Project Structure :
__tests__
  - actualTests
  - testLibrary
  - objectLibrary
  - testData
  - utils
  - logger
  - configs 

Tests:  This is where the actual tests are written which comprises of the steps and use cases. 

Library : This is where the  logic and verifications are present. This is broken down based on the functionalities as well. 

ObjectLibrary: xpath and css are written here so that the buttons, text etc can be interacted with. 