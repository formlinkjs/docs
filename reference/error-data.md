# ErrorData API Reference

This API reference guide provides detailed information on the `ErrorData` type and its properties, which are used to represent error data in your application.

## ErrorData Type: `ErrorData`

`ErrorData` is a type definition used to structure error data in your application. It can contain both a general error message and a dictionary of field-specific error messages.

## Properties

1. `message`
   - Type: `string|undefined`
   - Description: Represents a general error message that is not associated with any specific field. This property is optional and can be `undefined` if there is no general error message.

2. `errors`
   - Type: `{ [key: string]: string[]; }`
   - Description: A dictionary of field-specific error messages. Each key in the dictionary corresponds to a field or form input, and the associated value is an array of error messages related to that field. Multiple error messages for the same field can be captured within the string array.

## Usage

The `ErrorData` type is commonly used in error handling scenarios where you need to provide structured information about errors, including both general error messages and field-specific error messages. It enables you to organize and communicate error data effectively within your application.

Here's an example of how you might use `ErrorData`:

```typescript
const errorData: ErrorData = {
    message: "An error occurred while processing your request.",
    errors: {
        email: ["The email field is required.", "The email must be a valid email address."],
        password: ["The password field is required."],
    },
};
```

In this example, `errorData` contains both a general error message and specific error messages for the "email" and "password" fields.

## Summary

The `ErrorData` type is a versatile tool for structuring and representing error data in your application. It allows you to provide clear and detailed information about errors, facilitating effective error handling and communication with users.
