# Henry-Meds Cypress Framework

This is Cypress test automation framework for the Hery-Meds interview assignment.

## Project Set-up

Please clone this project and run the following command on the root directory of the project

```shell
npm install
```

Make sure that you have browser such as Chrome, Firefox on your system or you can use the default Electron (Chromium) browser.

## How to run test

There are two modes of running the test, _headless_ and _GUI_ mdoe.
For executing the test on GUI mode, execute the following command

```shell
npm run cy:open
```

For executing the test on Headless mode, excute the following command

```shell
npm run cy:run
```

Please note that HTML report and video recording will be generated for the headless mode executions.

### Report & Video

After the headless mode of thest execution, HTML report can be found on the following folder

```text
mochawesome-report/
```

Please note that video recording of headless test execution can be found on the following folder

```text
cypress/videos
```
