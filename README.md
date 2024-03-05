

# Node-js API Testing

## 1. Setup Environment

### Node.js Installation

Ensure Node.js is installed on your machine. If not, download and install it from [Node.js website](https://nodejs.org/).

### Project Initialization

Create a new directory for your project:

```bash
mkdir node-testing-challenge
cd node-testing-challenge
```

Initialize a new Node.js project:

```bash
npm init -y
```

Install necessary dependencies:

```bash
npm install express chai mocha --save-dev
```

## 2. Create a Simple Node.js Server

Create a file named server.js to set up a basic Node.js server with endpoints. Ensure the server is functional and can handle requests and responses appropriately.

```bash
// server.js

// ... Your server code here ...
```

## 3. Write Test Cases

Create a new directory named test to store your test files. Write test cases for each endpoint of your Node.js server using Mocha and Chai with Expect. Test cases should cover both positive and negative scenarios.

```bash
// test/app.test.js

describe('Node.js Server API Tests', () => {
    // ...

    // Test GET /users
    it('should return an array of users on GET /users', async () => {
      .....
    });

    // Test GET /users/:id with a valid user ID
    it('should return a single user on GET /users/:id with a valid user ID', async () => {
      ...
    });

    // Test GET /users/:id with an invalid user ID
    it('should return 404 Not Found on GET /users/:id with an invalid user ID', async () => {
      ...
    });

    // Test POST /users with valid input
    it('should create a new user on POST /users with valid input', async () => {
      ...
    });

    // Test POST /users with missing name
    it('should return 400 Bad Request on POST /users with missing name', async () => {
     ...
    });

    // Test PUT /users/:id with valid input
    it('should update a user on PUT /users/:id with valid input', async () => {
      ...
    });

    // Test PUT /users/:id with missing name
    it('should return 400 Bad Request on PUT /users/:id with missing name', async () => {
      ...
    });

    // Test DELETE /users/:id with valid input
    it('should delete a user on DELETE /users/:id with valid input', async () => {
      ...
    });

    // Test DELETE /users/:id with an invalid user ID
    it('should return 404 Not Found on DELETE /users/:id with an invalid user ID', async () => {
      ...
    });
});
```
## 4. Run Tests
Configure your test runner to execute Mocha tests. Run your test suite using:

```bash
npm test
```

Observe the results, ensure all tests pass successfully, and intentionally fail some tests for testing purposes.

## 5. Add Additional Tests (Optional)
If time permits, add more test cases to cover edge cases or additional functionalities of your server. Aim for comprehensive test coverage to ensure the robustness of your application.

## 6. Documentation
- Overview of Node.js Server and Endpoints
The Node.js server is a simple implementation using the Express framework. It exposes various endpoints to handle different HTTP methods (GET, POST, PUT, DELETE). These endpoints serve as a basic foundation for further development.

- Testing Approach
For automated testing, Mocha is used as the test runner, and Chai with Expect is utilized for assertions. This combination provides a clear and expressive syntax for writing test cases and assertions, ensuring the reliability of the tests.

- Instructions to Run Tests
To run the tests, use the following command:

```bash
npm test
```

This will execute Mocha and run all test cases specified in the "test" directory.

## Output Expectations

#### GET /users
```
Expecting a status code of 200.
Expecting the response body to be an array.
```
#### GET /users/:id with a valid user ID
```
Expecting a status code of 200.
Expecting the response body to be equal to the predefined user object.
```
#### GET /users/:id with an invalid user ID
```
Expecting a status code of 404.
Expecting the response body to be 'User not found'.
```
#### POST /users with valid input
```
Expecting a status code of 200.
Expecting the response body to have an 'id' property.
Expecting the response body 'name' property to match the input.
```
#### POST /users with missing name
```
Expecting a status code of 400.
Expecting the response body to be 'Name is required'.
```
#### PUT /users/:id with valid input
```
Expecting a status code of 200.
Expecting the response body to be equal to the updated user object.
```
#### PUT /users/:id with missing name
```
Expecting a status code of 400.
Expecting the response body to be 'Name is required'.
```
#### DELETE /users/:id with valid input
```
Expecting a status code of 200.
```
#### DELETE /users/:id 
```
Expecting a status code of 404
Expecting the response body to be 'User not found'
```

### some syntax suggestions for additional sections

#### GET /users/:id with a valid user ID

```
// Expecting a status code of 200
expect(res).to.have.status(200);

// Expecting the response body to be equal to the predefined user object
expect(res.body).to.deep.equal(user);
```

#### GET /users/:id with an invalid user ID

```
// Expecting a status code of 404
expect(res).to.have.status(404);

// Expecting the response body to be 'User not found'
expect(res.text).to.equal('User not found');
```

#### POST /users with valid input
```
// Expecting a status code of 200
expect(res).to.have.status(200);

// Expecting the response body to have an 'id' property
expect(res.body).to.have.property('id');

// Expecting the response body 'name' property to match the input
expect(res.body.name).to.equal(user.name);
```

#### POST /users with missing name
```
// Expecting a status code of 400
expect(res).to.have.status(400);

// Expecting the response body to be 'Name is required'
expect(res.text).to.equal('Name is required');

```

#### PUT /users/:id with valid input
```
// Expecting a status code of 200
expect(res).to.have.status(200);

// Expecting the response body to be equal to the updated user object
expect(res.body).to.deep.equal(user);
```

#### PUT /users/:id with missing name
```
// Expecting a status code of 400
expect(res).to.have.status(400);

// Expecting the response body to be 'Name is required'
expect(res.text).to.equal('Name is required');
```

#### DELETE /users/:id with valid input
```
// Expecting a status code of 200
expect(res).to.have.status(200);
```

#### DELETE /users/:id with an invalid user ID
```
// Expecting a status code of 404
expect(res).to.have.status(404);

// Expecting the response body to be 'User not found'
expect(res.text).to.equal('User not found');
```
---

## Automated Testing Challenge
#### Requirements:
* Basic understanding of JavaScript and Node.js
* Familiarity with testing concepts
* Basic knowledge of Mocha, Chai, and Expect (installation and usage)
#### Assignment Steps:
  #### 1.Setup Environment:
  * Install Node.js on your machine if not already installed.
  * Create a new directory for your project.
  * Initialise a new Node.js project using npm init.
  * Install necessary dependencies:
  ```
  npm install mocha chai expect --save-dev 
  ```
  #### 2.Create a Simple Node.js Server:
  * Create a simple Node.js server with basic endpoints (e.g., GET, POST, PUT, DELETE).
  * Ensure the server is functional and can handle requests and responses appropriately.
  #### 3.Write Test Cases:
* Create a new directory named test to store your test files.
* Write test cases for each endpoint of your Node.js server using Mocha.
* Utilise Chai with Expect to make assertions within your test cases.
* Test cases should cover positive scenarios (valid inputs) and negative scenarios (invalid inputs or error cases).
#### 4.Run Tests:
* Configure your test runner to execute Mocha tests.
* Run your test suite and observe the results.
* Ensure all tests pass successfully and just for test purposes, fail some of the tests.
#### 5.Add Additional Tests (Optional):
* If time permits, add more test cases to cover edge cases or additional functionalities of your server.
* Aim for comprehensive test coverage to ensure robustness of your application.
#### 6.Documentation:
* Provide a brief documentation explaining:
* Overview of your Node.js server and its endpoints.
* Details about your testing approach.
* Instructions on how to run the tests.
* Any additional notes or observations.
#### Submission Guidelines:
* Submit your assignment as a compressed file (ZIP or TAR)containing:
* Project directory with your Node.js server code.
* Test directory containing your Mocha test files.
* Any additional documentation or notes.
* You can share the google drive link for the zip with public access.
#### Evaluation Criteria:
* Completeness and correctness of test cases.
* Effectiveness of assertions using Chai with Expect.
* Clarity and organisation of code.
* Quality of documentation provided