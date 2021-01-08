$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Home.feature");
formatter.feature({
  "name": "Home",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Homepage Women items click on check",
  "description": "",
  "keyword": "Scenario"
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});