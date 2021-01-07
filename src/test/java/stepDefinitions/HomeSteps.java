package stepDefinitions;

import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObject.HomePage;


public class HomeSteps extends BaseClass {
    WebDriver driver;


    public void user_Launch_Chrome_browser() {
        System.setProperty("webdriver.chrome.driver","C://Drivers//chromedriver_win32/chromedriver.exe");
        driver = new ChromeDriver(); //launch chrome browser
        homePage =new HomePage(driver);

    }

    @When("User open URL {string}")
    public void user_open_URL(String url) {
        driver.get(url);
        driver.manage().window().maximize();
    }
    @When("User click on Women Category")
    public void user_click_on_Women_Category() {
        homePage.clickOnWomenBtn();
    }

    @When("User click on Dresses Category")
    public void user_click_on_Dresses_Category() {
        homePage.clickOnDressBtn();
    }

    @When("User click on T-Shirts Category")
    public void user_click_on_T_Shirts_Category() {
        homePage.clickOnTshirtsBtn();
    }

}
