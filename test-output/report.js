$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Home.feature");
formatter.feature({
  "name": "Home",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Homepage different items click on check",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Women Category",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.user_click_on_Women_Category()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.HomeSteps.user_click_on_Women_Category(HomeSteps.java:12)\r\n\tat ✽.User click on Women Category(file:///F:/thisheart/./Features/Home.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Dresses Category",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.user_click_on_Dresses_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on T-Shirts Category",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.user_click_on_T_Shirts_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});