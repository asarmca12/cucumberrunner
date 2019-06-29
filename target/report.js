$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/Addcustomer.feature");
formatter.feature({
  "name": "Addcustomer.feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user filling all details",
  "rows": [
    {
      "cells": [
        "test",
        "selenium",
        "test@gmail.com",
        "Chennai",
        "123456"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomersteps.the_user_filling_all_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be displayed id",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomersteps.the_user_should_be_displayed_id()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/Addtarifplan.feature");
formatter.feature({
  "name": "Addtarifplan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user click on add tariffplan",
  "keyword": "And "
});
formatter.step({
  "name": "The user is filling all the tariff details \"\u003cmonth rent\u003e\",\"\u003cfree loc\u003e\",\"\u003cfree intt\u003e\",\"\u003csms pack\u003e\",\"\u003cloc chge\u003e\",\"\u003cinte permin\u003e\",\"\u003csms per\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user click on tariff submit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should be displayed congratulation you add Tariff Plan",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "month rent",
        "free loc",
        "free intt",
        "sms pack",
        "loc chge",
        "inte permin",
        "sms per"
      ]
    },
    {
      "cells": [
        "100",
        "5",
        "1",
        "1",
        "1",
        "5",
        "1"
      ]
    },
    {
      "cells": [
        "101",
        "5",
        "1",
        "1",
        "1",
        "5",
        "1"
      ]
    },
    {
      "cells": [
        "102",
        "5",
        "1",
        "1",
        "1",
        "5",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariffplan",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_add_tariffplan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the tariff details \"100\",\"5\",\"1\",\"1\",\"1\",\"5\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_filling_all_the_tariff_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be displayed congratulation you add Tariff Plan",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"tag name\",\"selector\":\"hr\"}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TPBPP5D\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\Laptop\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62938}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 24f751b73ac81e9f23e9b3c749dcfcb8\n*** Element info: {Using\u003dtag name, value\u003dhr}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByTagName.findElement(By.java:320)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan(Addcustomersteps.java:82)\r\n\tat ✽.The user should be displayed congratulation you add Tariff Plan(src/test/resources/feature/Addtarifplan.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariffplan",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_add_tariffplan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the tariff details \"101\",\"5\",\"1\",\"1\",\"1\",\"5\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_filling_all_the_tariff_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be displayed congratulation you add Tariff Plan",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"tag name\",\"selector\":\"hr\"}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TPBPP5D\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\Laptop\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62998}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 2fb46be9b59ca1b81c70189be104ad46\n*** Element info: {Using\u003dtag name, value\u003dhr}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByTagName.findElement(By.java:320)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan(Addcustomersteps.java:82)\r\n\tat ✽.The user should be displayed congratulation you add Tariff Plan(src/test/resources/feature/Addtarifplan.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariffplan",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_add_tariffplan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the tariff details \"102\",\"5\",\"1\",\"1\",\"1\",\"5\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomersteps.the_user_is_filling_all_the_tariff_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomersteps.the_user_click_on_tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be displayed congratulation you add Tariff Plan",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"tag name\",\"selector\":\"hr\"}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-TPBPP5D\u0027, ip: \u0027192.168.0.164\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\Laptop\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63073}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 76a91dc712c7bda5e67c8af37dc0a590\n*** Element info: {Using\u003dtag name, value\u003dhr}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByTagName.findElement(By.java:320)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan(Addcustomersteps.java:82)\r\n\tat ✽.The user should be displayed congratulation you add Tariff Plan(src/test/resources/feature/Addtarifplan.feature:11)\r\n",
  "status": "failed"
});
});