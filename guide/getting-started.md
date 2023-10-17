# Getting Started with FormlinkJS

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
- [Import the Form Class](#import-the-form-class)
- [Create a New Form Instance](#create-a-new-form-instance)
- [Initialize Form Data](#initialize-form-data)
- [Access and Update Form Data](#access-and-update-form-data)
- [Set Form Options](#set-form-options)
- [Form Submission](#form-submission)
- [Handle Form Submission Results](#handle-form-submission-results)

## Installation

### Prerequisites

Before starting with FormlinkJS, make sure you have the following prerequisites in place:

- [Node.js](https://nodejs.org/) version 16 or higher.

FormlinkJS can be integrated into an existing project or used independently. Regardless of your choice, you can install it using one of the following package managers:

::: code-group

```sh [npm]
npm install formlink
```

```sh [pnpm]
pnpm install formlink
```

```sh [yarn]
yarn install formlink
```

```sh [bun]
bun install formlink
```

:::

## Import the Form Class

Once you've installed the required dependencies, you can import the `Form` class into your project. Be sure to provide the correct path to the `Form` class in your import statement:

```javascript
import { Form } from 'formlink';
```

Replace `'path-to-your-form-class'` with the actual path to your `Form.ts` file.

## Create a New Form Instance

To create a new instance of the `Form` class, use its constructor:

```javascript
const form = new Form();
```

or

```javascript
const form = Form.create();
```

## Initialize Form Data

You can initialize the form data by passing an object containing the initial data to the `Form` constructor. For example:

```javascript
const form = new Form({
    firstName: '',
    lastName: '',
    email: '',
}, {
    baseUrl: '/api',
    token: 'your-api-token',
});
```

Now, you're prepared to use the `Form` class to access and modify form data, set options, and handle form submissions.

## Access and Update Form Data

You can directly access and update form data fields on the `form` instance. For instance:

```javascript
form.firstName = 'John';
form.lastName = 'Doe';
form.email = 'johndoe@example.com';
```

You can also retrieve the current values of form fields:

```javascript
const firstName = form.firstName;
const lastName = form.lastName;
const email = form.email;
```

## Set Form Options

The `Form` class offers various options for form handling. You can configure options using the `withOptions` method:

```javascript
form.withOptions({
    resetOnSuccess: true, // Reset form on successful submission
    setInitialOnSuccess: false, // Set initial values on successful submission
    preserveState: false, // Preserve form state
    preserveScroll: false, // Preserve scroll position
});
```

## Form Submission

The `Form` class provides methods for making HTTP requests. You can use these methods to send data to a server:

- `get(url, options)`: Send a GET request.
- `post(url, options)`: Send a POST request.
- `put(url, options)`: Send a PUT request.
- `patch(url, options)`: Send a PATCH request.
- `delete(url, options)`: Send a DELETE request.

For example, to send a POST request:

```javascript
form.post('/submit', {
    // Additional options for the request
    // You can also specify callback functions for success and failure
    onSuccess: (response) => {
        // Handle success response
    },

    onFail: (errors) => {
        // Handle error response
    },

    onFinish: () => {
        // Handle post-request actions
    },
});
```

## Handle Form Submission Results

You can handle the results of form submissions using the provided callback functions for success and failure, as demonstrated in the previous step. This enables you to react to the server's response and manage errors.

Additionally, you can check the form's status using the following methods:

- `isProcessing()`: Verify if the form submission is still in progress.
- `isSuccessful()`: Check if the form submission was successful.
- `isRecentlySuccessful()`: Determine if the form was recently submitted, completed, and successful.
- `getIsDirty()`: Identify if the form has been modified.

You can use these methods to provide user feedback and trigger actions based on the form's status.

This guide should assist you in getting started with the `Form` class. Make sure to customize it to meet your specific use case and requirements.
