package stepDefinitions;

import io.cucumber.java.en.*;
import org.apache.tools.ant.taskdefs.Sleep;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObject.HomePage;
import pageObject.LoginPage;

public class LoginSteps extends BaseClass {
    WebDriver driver;
    @Given("User Launch Chrome browser")
    public void user_Launch_Chrome_browser() {
       System.setProperty("webdriver.chrome.driver","C://Drivers//chromedriver_win32/chromedriver.exe");
       driver = new ChromeDriver(); //launch chrome browser
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);

    }

    @When("User open URL {string}")
    public void user_open_URL(String url) {
        driver.get(url);
        driver.manage().window().maximize();
    }

    @When("User click on Sign In Button")
    public void user_click_on_Sign_In_Button() {
        homePage.clickOnSignInButton();
    }

    @When("User enter Email as {string} and Password as {string}")
    public void user_enter_Email_as_and_Password_as(String uname, String password) {
        loginPage.setUserName(uname);
        loginPage.setPassword(password);
    }

    @When("Click on Login")
    public void click_on_Login() throws InterruptedException {
        loginPage.clickSignIn();
        Thread.sleep(300);
    }

    @When("close browser")
    public void close_browser() {
        driver.quit();
    }

}
