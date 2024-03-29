# SDET 2024 - Technical Task

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/RsXeutxhcmpo2wBk2DoJkb/A9wjEdU4msxsDzMPQAHRGr/tree/main.svg?style=svg&circle-token=25d308112a9ae8f3618bee26c14b05556431bf32)](https://dl.circleci.com/status-badge/redirect/circleci/RsXeutxhcmpo2wBk2DoJkb/A9wjEdU4msxsDzMPQAHRGr/tree/main)


## Description

This project consists of automated tests for two parts:
1. Testing the My Store website using NightwatchJS.
2. Testing the API routes provided by the mock-user-auth module using Supertest and mocha.

## Features

- Automated testing of the My Store website contact us page, including:
  - Testing optional and required fields for form submission.
  - Validating various combinations of form submissions.
  - Testing file upload functionality.
- Automated testing of the My Store website homepage search functionality.
- Automated testing of the mock-user-auth API routes with various scenarios:
  - Valid and invalid request bodies.
  - Valid and invalid authorization.


## Reports
- You can find the report for My store testing in folder reports
-You can find the report for API testing in mochaawesome-report folder


## Installation

1. Clone the repository:
    git clone <repository_url>

2. Install dependencies:
    npm install

## Usage

### Running NightwatchJS Tests

1. Navigate to the NightwatchJS test directory:
    cd nightwatch-tests
2. Run the tests:
    npx nightwatch


### Running Supertest Tests

1. Navigate to the Supertest test directory:
2. Run the tests:
    npm test

## CI/CD Integration

This project is integrated with CircleCI for Continuous Integration and Continuous Deployment (CI/CD). 


## Dependencies

- NightwatchJS
- Supertest
- Mock-user-auth
- Mocha
 




