$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "HomePage Test",
  "description": "As user I want to calculate my age",
  "id": "homepage-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should get their age with valid details",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter date of birth \"\u003cdateOfBirth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting text \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see to greeting age \"\u003cage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details;",
  "rows": [
    {
      "cells": [
        "name",
        "dateOfBirth",
        "age"
      ],
      "line": 14,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;1"
    },
    {
      "cells": [
        "John",
        "05/08/2000",
        "23"
      ],
      "line": 15,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;2"
    },
    {
      "cells": [
        "Messi",
        "07/09/1980",
        "42"
      ],
      "line": 16,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;3"
    },
    {
      "cells": [
        "Sima",
        "15/04/1978",
        "45"
      ],
      "line": 17,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;4"
    },
    {
      "cells": [
        "Mira",
        "15/04/1908",
        "115"
      ],
      "line": 18,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5215595800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should get their age with valid details",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name \"John\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter date of birth \"05/08/2000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting text \"John\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see to greeting age \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 157033800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 216293100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/08/2000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 126708900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 105109200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingText(String)"
});
formatter.result({
  "duration": 690075000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 30
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingAge(String)"
});
formatter.result({
  "duration": 39966400,
  "status": "passed"
});
formatter.after({
  "duration": 738952700,
  "status": "passed"
});
formatter.before({
  "duration": 2732396200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should get their age with valid details",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name \"Messi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter date of birth \"07/09/1980\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting text \"Messi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see to greeting age \"42\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messi",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 184582600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/09/1980",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 130904400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 110783000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messi",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingText(String)"
});
formatter.result({
  "duration": 627678700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 30
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingAge(String)"
});
formatter.result({
  "duration": 41351200,
  "status": "passed"
});
formatter.after({
  "duration": 721690600,
  "status": "passed"
});
formatter.before({
  "duration": 2478522000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should get their age with valid details",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name \"Sima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter date of birth \"15/04/1978\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting text \"Sima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see to greeting age \"45\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sima",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 224607600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/04/1978",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 110889200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 90531400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sima",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingText(String)"
});
formatter.result({
  "duration": 618588200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 30
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingAge(String)"
});
formatter.result({
  "duration": 35955500,
  "status": "passed"
});
formatter.after({
  "duration": 742946900,
  "status": "passed"
});
formatter.before({
  "duration": 2427607300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should get their age with valid details",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter name \"Mira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter date of birth \"15/04/1908\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting text \"Mira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see to greeting age \"115\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mira",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 174862400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/04/1908",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 117995400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 91592000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mira",
      "offset": 31
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingText(String)"
});
formatter.result({
  "duration": 610014200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115",
      "offset": 30
    }
  ],
  "location": "HomePageSteps.iShouldSeeToGreetingAge(String)"
});
formatter.result({
  "duration": 36447400,
  "status": "passed"
});
formatter.after({
  "duration": 757613800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "User should get error message with invalid details",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter date of birth \"\u003cdateOfBirth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the error message \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "name",
        "dateOfBirth",
        "error"
      ],
      "line": 27,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;1"
    },
    {
      "cells": [
        "Sima",
        "15/04/1808",
        "you are too old to use it"
      ],
      "line": 28,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;2"
    },
    {
      "cells": [
        "Mira",
        "15/03/2026",
        "your birthday must be in the past"
      ],
      "line": 29,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;3"
    },
    {
      "cells": [
        "Silvia",
        "31/02/2000",
        "wrong date"
      ],
      "line": 30,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;4"
    },
    {
      "cells": [
        "Tom",
        "29/02/1982",
        "wrong date"
      ],
      "line": 31,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2264579900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should get error message with invalid details",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter name \"Sima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter date of birth \"15/04/1808\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the error message \"you are too old to use it\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sima",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 166685100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/04/1808",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 122102900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 103355800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "you are too old to use it",
      "offset": 32
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 166875100,
  "status": "passed"
});
formatter.after({
  "duration": 735858300,
  "status": "passed"
});
formatter.before({
  "duration": 2380096800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should get error message with invalid details",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter name \"Mira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter date of birth \"15/03/2026\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the error message \"your birthday must be in the past\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mira",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 165686700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/03/2026",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 120119100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 91985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "your birthday must be in the past",
      "offset": 32
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 365270900,
  "status": "passed"
});
formatter.after({
  "duration": 758774200,
  "status": "passed"
});
formatter.before({
  "duration": 2568631700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should get error message with invalid details",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter name \"Silvia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter date of birth \"31/02/2000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the error message \"wrong date\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silvia",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 172285200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31/02/2000",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 120791300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 92482500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong date",
      "offset": 32
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 377913000,
  "status": "passed"
});
formatter.after({
  "duration": 696377800,
  "status": "passed"
});
formatter.before({
  "duration": 2603833900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should get error message with invalid details",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter name \"Tom\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter date of birth \"29/02/1982\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the error message \"wrong date\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.iEnterName(String)"
});
formatter.result({
  "duration": 141108900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/02/1982",
      "offset": 23
    }
  ],
  "location": "HomePageSteps.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 93019100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 90789900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong date",
      "offset": 32
    }
  ],
  "location": "HomePageSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 357528700,
  "status": "passed"
});
formatter.after({
  "duration": 749601500,
  "status": "passed"
});
});