package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BaseClass;

public class LoginPage extends BaseClass {
    @FindBy(id = "email")
    WebElement txtEmail;
    @FindBy(id = "passwd")
    WebElement txtPassword;
    @FindBy(id = "SubmitLogin")
    WebElement btnSignIn;

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    public void setUserName(String uname) {
        txtEmail.clear();
        txtEmail.sendKeys(uname);
    }

    public void setPassword(String password) {
        txtPassword.clear();
        txtPassword.sendKeys(password);
    }

    public void clickSignIn() {
        btnSignIn.click();
    }

}
