package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public WebDriver loginDriver;
    public LoginPage(WebDriver rdriver){
        loginDriver = rdriver;
        PageFactory.initElements(rdriver, this);
    }
    @FindBy  (id = "email")
    WebElement txtEmail;

    @FindBy  (id = "passwd")
    WebElement txtPassword;

    @FindBy  (id = "SubmitLogin")
    WebElement btnSignIn;

    public void setUserName(String uname){
        txtEmail.clear();
        txtEmail.sendKeys(uname);
    }

    public void setPassword(String password){
        txtPassword.clear();
        txtPassword.sendKeys(password);
    }

    public void clickSignIn (){
        btnSignIn.click();
    }

}
