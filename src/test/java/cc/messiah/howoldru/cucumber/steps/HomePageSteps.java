package cc.messiah.howoldru.cucumber.steps;

import cc.messiah.howoldru.pages.HomePage;
import cc.messiah.howoldru.pages.ResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class HomePageSteps {
    @When("^I enter name \"([^\"]*)\"$")
    public void iEnterName(String name) {
        new HomePage().enterYourName(name);
    }

    @And("^I enter date of birth \"([^\"]*)\"$")
    public void iEnterDateOfBirth(String dateOfBirth) {
        new HomePage().enterDateOfBirth(dateOfBirth);
    }

    @And("^I click on submit button$")
    public void iClickOnSubmitButton() {
        new HomePage().clickOnSubmitButton();
    }

    @Then("^I should see to greeting text \"([^\"]*)\"$")
    public void iShouldSeeToGreetingText(String greetingName) throws Throwable {
        String expectedMessage = "Hello " + greetingName + "!";
        String actualMessage = "Hello " + new ResultPage().getResultNameText() + "!";
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @Then("^I should see to greeting age \"([^\"]*)\"$")
    public void iShouldSeeToGreetingAge(String argText) throws Throwable {
        String expectedMessage = "Your age is " + argText;
        String actualMessage = "Your age is " + new ResultPage().getResultAgeText();
        Assert.assertEquals(actualMessage, expectedMessage);
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        Assert.assertEquals(errorMessage, new HomePage().getErrorMessage(), "Error message not displayed");
    }
}
