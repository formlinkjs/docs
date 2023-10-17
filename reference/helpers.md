# Helpers

This API reference guide provides detailed information on error handling utility functions for working with error responses in your application.

## Table of Contents

- [Table of Contents](#table-of-contents)
    - [Function: `hasFilesDeep`](#function-hasfilesdeep)
    - [Function: `isFile`](#function-isfile)
    - [Function: `makeError`](#function-makeerror)
- [Summary](#summary)

### Function: `hasFilesDeep`

```javascript
export const hasFilesDeep(object: { [key: string]: any; }): boolean
```

- Determines if file data is available embedded within the data object.
- Parameters:
    - `object`: An object that may contain embedded file data.
- Returns: A boolean value indicating whether file data is present within the object.

### Function: `isFile`

```javascript
export const isFile(object: any): boolean
```

- Determines if the given object is a file or a file list.
- Parameters:
    - `object`: Any value to be checked.
- Returns: A boolean value indicating whether the provided object is a file or a file list.

### Function: `makeError`

```javascript
export const makeError(errors: { [key: string]: string[]; }): ErrorResponse
```

- Creates a new error response object.
- Parameters:
    - `errors`: An object containing error messages categorized by field.
- Returns: An `ErrorResponse` object with the specified error data.

## Summary

This set of utility functions is designed to help you manage error responses and related tasks in your application.

- `hasFilesDeep`: Use this function to determine if any file data is present within a deeply nested object. This is useful when dealing with complex data structures.

- `isFile`: Use this function to check if an object is an instance of `File` or `FileList`, which is helpful when handling file uploads.

- `makeError`: This function allows you to quickly create an `ErrorResponse` object with a specified set of error messages, typically used when simulating or generating error responses for testing and development purposes.
