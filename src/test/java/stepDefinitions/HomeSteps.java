package stepDefinitions;

import io.cucumber.java.en.*;

import org.junit.Assert;

public class HomeSteps extends BaseClass {

    @Then("Page title should be {string}")
    public void pageTitleShouldBe(String title) {
        String expectedTitle = "Women - My Store";
        String siteTitle = driver.getTitle();
        Assert.assertEquals(expectedTitle, siteTitle);
    }

    @When("User click on Dresses Category")
    public void user_click_on_Dresses_Category() {
        homePage.clickOnDressBtn();
    }

    @When("User click on T-Shirts Category")
    public void user_click_on_T_Shirts_Category() {
        homePage.clickOnTshirtsBtn();
    }


    @Given("I am on home page")
    public void iAmOnHomePage() {
        System.out.println("Home Page ");
    }
}
