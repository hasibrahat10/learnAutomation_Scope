package stepDefinitions;

import io.cucumber.java.en.*;

import org.junit.Assert;
import pageObject.HomePage;

public class HomeSteps extends BaseClass {
    HomePage homePage = new HomePage();

    @Then("Page title should be {string}")
    public void pageTitleShouldBe(String title) {
//        String expectedTitle = "Women - My Store";
//        String siteTitle = driver.getTitle();
//        Assert.assertEquals(expectedTitle, siteTitle);
        if(driver.getPageSource().contains(title)){
            driver.close();
            Assert.assertTrue(false);
        }else {
            Assert.assertEquals(title, driver.getTitle());
        }
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @When("User click on Dresses Category")
    public void user_click_on_Dresses_Category() {
        homePage.clickOnDressBtn();
    }

    @When("User click on T-Shirts Category")
    public void user_click_on_T_Shirts_Category() {
        new HomePage().clickOnTshirtsBtn();
    }


    @Given("I am on home page")
    public void iAmOnHomePage() {
        System.out.println("Home Page ");
    }

    @Then("Page title should be <title>")
    public void pageTitleShouldBeTitle() {

    }
}
