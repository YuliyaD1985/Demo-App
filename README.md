# Demo-App

# Asana Task Automation

## **Introduction**
This project automates task verification for a demo Asana application using Playwright. It dynamically adapts to test cases defined in a JSON object to reduce duplication and improve scalability.

## **Implementation Details**
1. **Page Object Model (POM):** Modularizes the login and task verification processes.
2. **Data-Driven Approach:** Test cases are dynamically loaded from `testCases.json`.
3. **Playwright Features:** Utilizes locators, assertions, and headless browser capabilities for robust automation.

## **Challenges and Solutions**
- **Dynamic UI Elements:** XPath and CSS selectors were used to handle varying layouts.
- **Scalability:** A JSON-driven approach ensures easy addition of new test cases without modifying code.

## **Results**
- All test cases passed successfully.

## **Recommendations**
- Implement API testing for faster task data validation.
- Add additional edge cases for login (e.g., incorrect credentials).