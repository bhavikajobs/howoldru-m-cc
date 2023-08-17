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
  "line": 5,
  "name": "User should get their age with valid details",
  "description": "",
  "id": "homepage-test;user-should-get-their-age-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter date of birth \"\u003cdateOfBirth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see to greeting text \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting age \"\u003cage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
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
      "line": 13,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;1"
    },
    {
      "cells": [
        "John",
        "05/08/2000",
        "23"
      ],
      "line": 14,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;2"
    },
    {
      "cells": [
        "Messi",
        "07/09/1980",
        "42"
      ],
      "line": 15,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;3"
    },
    {
      "cells": [
        "Sima",
        "15/04/1978",
        "45"
      ],
      "line": 16,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;4"
    },
    {
      "cells": [
        "Mira",
        "15/04/1908",
        "115"
      ],
      "line": 17,
      "id": "homepage-test;user-should-get-their-age-with-valid-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2429877500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter name \"John\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter date of birth \"05/08/2000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see to greeting text \"John\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting age \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 84967100,
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
  "duration": 115202600,
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
  "duration": 53494700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 45944700,
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
  "duration": 592190300,
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
  "duration": 15146400,
  "status": "passed"
});
formatter.after({
  "duration": 591356200,
  "status": "passed"
});
formatter.before({
  "duration": 1485046800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter name \"Messi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter date of birth \"07/09/1980\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see to greeting text \"Messi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting age \"42\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25300,
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
  "duration": 58113900,
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
  "duration": 41417900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 37758200,
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
  "duration": 556923300,
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
  "duration": 14284600,
  "status": "passed"
});
formatter.after({
  "duration": 595652700,
  "status": "passed"
});
formatter.before({
  "duration": 1470663700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter name \"Sima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter date of birth \"15/04/1978\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see to greeting text \"Sima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting age \"45\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12600,
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
  "duration": 56724000,
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
  "duration": 41878600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 37019300,
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
  "duration": 563769900,
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
  "duration": 14393900,
  "status": "passed"
});
formatter.after({
  "duration": 595173200,
  "status": "passed"
});
formatter.before({
  "duration": 1419327800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
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
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter name \"Mira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter date of birth \"15/04/1908\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see to greeting text \"Mira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see to greeting age \"115\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 11600,
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
  "duration": 58483500,
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
  "duration": 40099900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 37310100,
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
  "duration": 546406800,
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
  "duration": 13113100,
  "status": "passed"
});
formatter.after({
  "duration": 599091600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "User should get error message with invalid details",
  "description": "",
  "id": "homepage-test;user-should-get-error-message-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter date of birth \"\u003cdateOfBirth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
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
      "line": 26,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;1"
    },
    {
      "cells": [
        "Sima",
        "15/04/1808",
        "you are too old to use it"
      ],
      "line": 27,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;2"
    },
    {
      "cells": [
        "Mira",
        "15/03/2026",
        "your birthday must be in the past"
      ],
      "line": 28,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;3"
    },
    {
      "cells": [
        "Silvia",
        "31/02/2000",
        "wrong date"
      ],
      "line": 29,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;4"
    },
    {
      "cells": [
        "Tom",
        "29/02/1982",
        "wrong date"
      ],
      "line": 30,
      "id": "homepage-test;user-should-get-error-message-with-invalid-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1472823300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
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
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter name \"Sima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter date of birth \"15/04/1808\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"you are too old to use it\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15000,
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
  "duration": 55419800,
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
  "duration": 42861000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 37078900,
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
  "duration": 326948400,
  "status": "passed"
});
formatter.after({
  "duration": 591840300,
  "status": "passed"
});
formatter.before({
  "duration": 1461968700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
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
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter name \"Mira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter date of birth \"15/03/2026\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"your birthday must be in the past\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13100,
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
  "duration": 57634400,
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
  "duration": 40020100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 37198500,
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
  "duration": 338666200,
  "status": "passed"
});
formatter.after({
  "duration": 587679600,
  "status": "passed"
});
formatter.before({
  "duration": 1246988500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
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
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter name \"Silvia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter date of birth \"31/02/2000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"wrong date\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13000,
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
  "duration": 72542200,
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
  "duration": 47331900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 39499800,
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
  "duration": 330541200,
  "status": "passed"
});
formatter.after({
  "duration": 590640500,
  "status": "passed"
});
formatter.before({
  "duration": 1448154400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
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
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter name \"Tom\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter date of birth \"29/02/1982\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the error message \"wrong date\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13600,
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
  "duration": 62687600,
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
  "duration": 47896400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 40752100,
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
  "duration": 336222300,
  "status": "passed"
});
formatter.after({
  "duration": 578930500,
  "status": "passed"
});
});