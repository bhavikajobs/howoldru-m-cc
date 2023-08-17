package cc.messiah.howoldru.pages;

import cc.messiah.howoldru.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    WebElement resultNameText;

    By resultName = By.id("resultName");

    @CacheLookup
    @FindBy(id = "resultAge")
    WebElement resultAgeText;

    public String getResultNameText() {
        resultNameText = waitUntilVisibilityOfElementLocated(resultName, 10);
        return getTextFromElement(resultNameText);
    }

    public String getResultAgeText() {
        return getTextFromElement(resultAgeText);
    }

}
