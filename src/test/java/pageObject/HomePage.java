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

    @FindBy(xpath = "//a[contains(text(),'Women' )]")
    WebElement wmnBtn;

    @FindBy(xpath = "//a[contains(text(),'Dresses')]")
    WebElement dressBtn;

    @FindBy(xpath = "//a[contains(text(),'T-shirts')]")
    WebElement tshirtBtn;

    public void clickOnSignInButton(){

        signIn.click();
    }

     public void  clickOnWomenBtn(){
        wmnBtn.click();
     }

    public void  clickOnDressBtn(){
        dressBtn.click();
    }

    public void  clickOnTshirtsBtn(){
        tshirtBtn.click();
    }

}
