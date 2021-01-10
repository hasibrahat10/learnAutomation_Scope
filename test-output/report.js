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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8IIG3HH\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51379}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d99db922cda631a638de649b4bde94a2\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Women\u0027 )]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pageObject.HomePage.clickOnWomenBtn(HomePage.java:28)\r\n\tat stepDefinitions.LoginSteps.user_click_on_Women_Category(LoginSteps.java:16)\r\n\tat ✽.User click on Women Category(file:///F:/thisheart/./Features/Home.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Page title should be \"Women - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.pageTitleShouldBe()"
});
formatter.result({
  "status": "skipped"
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
        "\"Women - My Store\""
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8IIG3HH\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0121C013+3194899]\n\tOrdinal0 [0x01106021+2056225]\n\tOrdinal0 [0x00F9F4B0+586928]\n\tOrdinal0 [0x00F95894+546964]\n\tOrdinal0 [0x00F95F2C+548652]\n\tOrdinal0 [0x00F97175+553333]\n\tOrdinal0 [0x00F9241E+533534]\n\tOrdinal0 [0x00FA0620+591392]\n\tOrdinal0 [0x00F42A0C+207372]\n\tOrdinal0 [0x00F41D0D+204045]\n\tOrdinal0 [0x00F3FC1B+195611]\n\tOrdinal0 [0x00F23B7F+80767]\n\tOrdinal0 [0x00F24B4E+84814]\n\tOrdinal0 [0x00F24AD9+84697]\n\tOrdinal0 [0x0111CE64+2149988]\n\tGetHandleVerifier [0x0138BE95+1400773]\n\tGetHandleVerifier [0x0138BB61+1399953]\n\tGetHandleVerifier [0x013931FA+1430314]\n\tGetHandleVerifier [0x0138C69F+1402831]\n\tOrdinal0 [0x01113D61+2112865]\n\tOrdinal0 [0x0111E5CB+2155979]\n\tOrdinal0 [0x0111E6F5+2156277]\n\tOrdinal0 [0x0112F26E+2224750]\n\tBaseThreadInitThunk [0x76D4FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x770675F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x770675C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.BaseClass.startDriver(BaseClass.java:24)\r\n\tat stepDefinitions.Hooks.setUpDriver(Hooks.java:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.iAmOnHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Page title should be \"Women - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.pageTitleShouldBe()"
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
        "\"Women - My Store\""
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8IIG3HH\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0121C013+3194899]\n\tOrdinal0 [0x01106021+2056225]\n\tOrdinal0 [0x00F9F4B0+586928]\n\tOrdinal0 [0x00F95894+546964]\n\tOrdinal0 [0x00F95F2C+548652]\n\tOrdinal0 [0x00F97175+553333]\n\tOrdinal0 [0x00F9241E+533534]\n\tOrdinal0 [0x00FA0620+591392]\n\tOrdinal0 [0x00F42A0C+207372]\n\tOrdinal0 [0x00F41D0D+204045]\n\tOrdinal0 [0x00F3FC1B+195611]\n\tOrdinal0 [0x00F23B7F+80767]\n\tOrdinal0 [0x00F24B4E+84814]\n\tOrdinal0 [0x00F24AD9+84697]\n\tOrdinal0 [0x0111CE64+2149988]\n\tGetHandleVerifier [0x0138BE95+1400773]\n\tGetHandleVerifier [0x0138BB61+1399953]\n\tGetHandleVerifier [0x013931FA+1430314]\n\tGetHandleVerifier [0x0138C69F+1402831]\n\tOrdinal0 [0x01113D61+2112865]\n\tOrdinal0 [0x0111E5CB+2155979]\n\tOrdinal0 [0x0111E6F5+2156277]\n\tOrdinal0 [0x0112F26E+2224750]\n\tBaseThreadInitThunk [0x76D4FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x770675F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x770675C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.BaseClass.startDriver(BaseClass.java:24)\r\n\tat stepDefinitions.Hooks.setUpDriver(Hooks.java:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.iAmOnHomePage()"
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
  "name": "Page title should be \"Women - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.pageTitleShouldBe()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});