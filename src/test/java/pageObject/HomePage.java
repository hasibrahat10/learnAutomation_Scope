package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BaseClass;

public class HomePage extends BaseClass {
    @FindBy(xpath = "//a[contains(text(), 'Sign in')]")
    WebElement signIn;
    @FindBy(xpath = "//a[contains(text(),'Women' )]")
    WebElement wmnBtn;
    @FindBy(xpath = "//a[contains(text(),'Dresses')]")
    WebElement dressBtn;
    @FindBy(xpath = "//a[contains(text(),'T-shirts')]")
    WebElement tshirtBtn;

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    public void clickOnSignInButton() {

        signIn.click();
    }

    public void clickOnWomenBtn() {
        wmnBtn.click();
    }

    public void clickOnDressBtn() {
        dressBtn.click();
    }

    public void clickOnTshirtsBtn() {
        tshirtBtn.click();
    }

}
