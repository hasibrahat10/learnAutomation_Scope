$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Home.feature");
formatter.feature({
  "name": "Home",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Homepage Women items click on check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on Women Category",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be \u003ctitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "\"Women - My Store\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Homepage Women items click on check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.iAmOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Women Category",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_click_on_Women_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Women - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.pageTitleShouldBe(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.HomeSteps.pageTitleShouldBe(HomeSteps.java:16)\r\n\tat ✽.Page title should be \"Women - My Store\"(file:///F:/thisheart/./Features/Home.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Homepage Dresses items click on check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on Dresses Category",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be \u003ctitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "\"Dresses - My Store\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Homepage Dresses items click on check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.iAmOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Dresses Category",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.user_click_on_Dresses_Category()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.HomeSteps.user_click_on_Dresses_Category(HomeSteps.java:29)\r\n\tat ✽.User click on Dresses Category(file:///F:/thisheart/./Features/Home.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Page title should be \"Dresses - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.pageTitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Homepage TShirts items click on check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on T-Shirts Category",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be \u003ctitle\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "\"T-shirts - My Store\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Homepage TShirts items click on check",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.iAmOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on T-Shirts Category",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.user_click_on_T_Shirts_Category()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.HomeSteps.user_click_on_T_Shirts_Category(HomeSteps.java:34)\r\n\tat ✽.User click on T-Shirts Category(file:///F:/thisheart/./Features/Home.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Page title should be \"T-shirts - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.pageTitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});