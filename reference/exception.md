# Exception Handler

This API reference guide provides detailed information on the `Handler` class and its methods. The `Handler` class is designed to handle and manage error responses, such as those received from HTTP requests, in a frontend application.

## Table of Contents

- [Table of Contents](#table-of-contents)
    - [Constructor](#constructor)
    - [Instance Method: `get`](#instance-method-get)
    - [Instance Method: `getRaw`](#instance-method-getraw)
    - [Instance Method: `getAll`](#instance-method-getall)
    - [Instance Method: `has`](#instance-method-has)
    - [Instance Method: `flatten`](#instance-method-flatten)
    - [Instance Method: `all`](#instance-method-all)
    - [Instance Method: `record`](#instance-method-record)
    - [Instance Method: `clear`](#instance-method-clear)
    - [Instance Method: `any`](#instance-method-any)
    - [Instance Method: `setStatusCode`](#instance-method-setstatuscode)
    - [Instance Method: `getStatusCode`](#instance-method-getstatuscode)
    - [Properties](#properties)
        - [`errors`](#errors)
        - [`status`](#status)
- [Summary](#summary)

### Constructor

```javascript
constructor(errors?: ErrorResponse)
```

- Creates a new `Handler` instance for managing error responses.
- Parameters:
    - `errors` (optional): An `ErrorResponse` object containing error information.
- Returns: A `Handler` instance.

### Instance Method: `get`

```javascript
get(field: string): string | undefined
```

- Retrieves the first error message for a given field.
- Parameters:
    - `field`: The field for which to retrieve the error message.
- Returns: A string representing the first error message for the specified field, or `undefined` if no error is found.

### Instance Method: `getRaw`

```javascript
getRaw(field: string): ErrorObject | undefined
```

- Retrieves the raw error object for a given field.
- Parameters:
    - `field`: The field for which to retrieve the error object.
- Returns: An `ErrorObject` representing the error for the specified field, or `undefined` if no error is found.

### Instance Method: `getAll`

```javascript
getAll(field: string): string[]
```

- Retrieves all error messages for a given field.
- Parameters:
    - `field`: The field for which to retrieve all error messages.
- Returns: An array of strings representing all error messages for the specified field.

### Instance Method: `has`

```javascript
has(field: string): boolean
```

- Determines if the given field has an error.
- Parameters:
    - `field`: The field to check for errors.
- Returns: `true` if errors are found for the specified field; otherwise, `false`.

### Instance Method: `flatten`

```javascript
flatten(): string[]
```

- Retrieves all error messages as a flat array.
- Returns: An array of strings representing all error messages.

### Instance Method: `all`

```javascript
all(): ErrorObject[]
```

- Retrieves all error objects.
- Returns: An array of `ErrorObject` representing all errors.

### Instance Method: `record`

```javascript
record(errors: ErrorResponse): void
```

- Records error messages from an `ErrorResponse` object.
- Parameters:
    - `errors`: An `ErrorResponse` object containing error information to record.
- Returns: `void`.

### Instance Method: `clear`

```javascript
clear(field?: string): void
```

- Clears error messages for a specific field or all fields.
- Parameters:
    - `field` (optional): The field for which to clear error messages. If not provided, all errors are cleared.
- Returns: `void`.

### Instance Method: `any`

```javascript
any(): boolean
```

- Determines if there are any error messages available in all registered fields.
- Returns: `true` if there are any errors; otherwise, `false`.

### Instance Method: `setStatusCode`

```javascript
setStatusCode(status: number): void
```

- Sets the status code for the error.
- Parameters:
    - `status`: The HTTP status code to set for the error.
- Returns: `void`.

### Instance Method: `getStatusCode`

```javascript
getStatusCode(): number
```

- Retrieves the status code for the error.
- Returns: The HTTP status code associated with the error.

### Properties

#### `errors`

```javascript
protected errors: ErrorObject[]
```

- An array of `ErrorObject` representing error details.

#### `status`

```javascript
protected status: number
```

- The error status code, initialized to `Http.UNPROCESSABLE_ENTITY`.

## Summary

The `Handler` class is a utility for managing and handling error responses in a frontend application. It provides methods for accessing error messages, clearing errors, recording new error information, and retrieving the HTTP status code associated with the error. This class can be used to manage and display error messages to the user efficiently.
