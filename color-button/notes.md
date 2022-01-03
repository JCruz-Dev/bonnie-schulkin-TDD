## Syntax

`render method`:

-   Create a virtual DOM for argument jsx
-   Access virtual DOM via screen global once is been rendered

`screen.getByText()`: Find element by display text
`Assertions` This causes the test to succeed or fail.

`expect`: jest glob`al, starts the assertion `toBeInTheDocument`: (matcher) type of assertion to be in the document

Jest-DOM: import the matchers to test the DOM

React testing library: helps with rendering components into virtual DOM, search in virtual DOM and interacting with Virtual DOM.

Jest: A test runner that runs tests written in JavaScript and make assertions about the results.

`Watch mode in Jest`: Wacth for changes in files since last commit.

`How Jest works`: It has a global test method tht has two arguments: the test name and the test function.

A test error is thrown if there is an error in the test function when it is run.

An `assertions` works by comparing the expected value to the actual value and throws an error if the two values are not equal.

Notes:
Empty tests pass.
No error, tests pass.

TDD = Test Driven Development

What this makes you do is:

-   Write test before writing code.
-   Write code to pass the test.

`What is red green testing`: You want the test to fail before you write the code and after you write the code, you want the test to pass.

### Types of tests:

-   Unit tests: tests that test a single unit of code. (function or react component in insolation)
-   Integration tests: How multipe components are connected together.
-   Functional tests: tests a particular function of software (behavior).
-   Acceptance / End-to-end (E2E) tests: tests that verify that a user can use a particular feature of the software. This uses an actual browser and server (Cypress / Selenium)

### Unit tests vs. Functional

-   For Unit tests: the tests should be as isolated as possible. You mock dependencies, test internals
    PROS:

    -   You can test the internal state of the component.
    -   Very easy to pintpoint failures and where to find the error in the component.
        CONS:
    -   Further from how users interact with software.
    -   More likely to break with refactoring.

-   For Functional Testing: Includes all relevant units, and test behavior.
    PROS:
    -   Close to how users interact with software.
    -   Robusts tests
        CONS:
    -   More difficult to pinpoint failures.

### TDD vs BDD

TDD: Test Driven Development
BDD: Behavior Driven Development

Testing Library encourages testing behavior over implementation.

BDD is very explicitly defined and involes collaboration between lots of roles. For example, developers, QA, business partners, etc.

BDD defineds process for different groups to interact.

### Accesibility and Findind Elements

TL (React Testing Library): recomends findig elements in by accessibility handels.
