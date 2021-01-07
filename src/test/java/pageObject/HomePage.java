package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public WebDriver homePageDriver;
    public HomePage(WebDriver rdriver){
        homePageDriver = rdriver;
        PageFactory.initElements(rdriver, this);
    }

    @FindBy(xpath = "//a[contains(text(), 'Sign in')]")
    WebElement signIn;


    public void clickOnSignInButton(){

        signIn.click();
    }



}
