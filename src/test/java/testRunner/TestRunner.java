package testRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;



    @RunWith(Cucumber.class)
    @CucumberOptions
            (features = "F://thisheart",
                    glue = "stepDefinitions")

    public class TestRunner {
    }



