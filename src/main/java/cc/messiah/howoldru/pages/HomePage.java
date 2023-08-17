package cc.messiah.howoldru.pages;


import cc.messiah.howoldru.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "inputName")
    WebElement nameField;

    @CacheLookup
    @FindBy(id = "inputBirthday")
    WebElement dateOfBirthField;

    @CacheLookup
    @FindBy(id = "submitButton")
    WebElement submitButton;

    @CacheLookup
    @FindBy(id = "help_birthday")
    WebElement errorMessageText;

    //By helpBirthday = By.id("help_birthday");

    public void enterYourName( String name) {
        sendTextToElement(nameField,name);
        log.info("Enter your name : " + nameField.toString());
    }

    public void enterDateOfBirth(String dateOFBirth) {
        sendTextToElement(dateOfBirthField,dateOFBirth);
        log.info("Enter Date Of Birth : " + dateOfBirthField.toString());
    }

    public void clickOnSubmitButton() {
        clickOnElement(submitButton);
        log.info("Clicking On Submit Button :" + submitButton.toString());
    }

    public String getErrorMessage() {
        //explicit wait
        //errorMessageText = waitUntilVisibilityOfElementLocated(helpBirthday, 10);
        return getTextFromElement(errorMessageText);
    }
}




