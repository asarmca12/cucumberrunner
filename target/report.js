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
formatter.scenario({
  "name": "",
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
  "name": "The user is filling all the tariff details \"\u003cmonth rent\u003e\",\"\u003cfree loc\u003e\",\"\u003cfree intt\u003e\",\"\u003csms pack\u003e\",\"\u003cloc chge\u003e\",\"\u003cinte permin\u003e\",\"\u003csms per\u003e\"",
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
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [The user should be displayed congratulation you add Tariff Plan] is defined with 0 parameters at \u0027com.stepdefinition.Addcustomersteps.the_user_should_be_displayed_congratulation_you_add_Tariff_Plan() in file:/E:/ProjectWorkspace/cucumber22/target/test-classes/\u0027.\nHowever, the gherkin step has 1 arguments:\n * Table:\n      | month rent | free loc | free intt | sms pack | loc chge | inte permin | sms per |\n      | 100        | 5        | 1         | 1        | 1        | 5           | 1       |\n\nStep text: The user should be displayed congratulation you add Tariff Plan\r\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});