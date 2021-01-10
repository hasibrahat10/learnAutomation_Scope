package stepDefinitions;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import pageObject.HomePage;
import pageObject.LoginPage;

import java.util.logging.Level;
import java.util.logging.Logger;


public class BaseClass {
    public static WebDriver driver;
    public LoginPage loginPage;
    public HomePage homePage;

    public void startDriver() {
        System.setProperty(ChromeDriverService.CHROME_DRIVER_EXE_PROPERTY, System.getProperty("user.dir") + "/Drivers/chromedriver_win32/chromedriver.exe");
        System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
        System.setProperty(ChromeDriverService.CHROME_DRIVER_LOG_PROPERTY, "true");
        Logger.getLogger("org.openqa.selenium").setLevel(Level.OFF);
        driver = new ChromeDriver(); //launch chrome browser
    }

    public void stopDriver() {
        if (driver != null) {
            driver.quit();
        }
    }
}