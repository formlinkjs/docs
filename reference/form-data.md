# FormData

This API reference guide provides detailed information about the `objectToFormData` function and related utility functions used to convert an object into a `FormData` object in JavaScript.

## Table of Contents

- [Table of Contents](#table-of-contents)
    - [objectToFormData Function](#objecttoformdata-function)
        - [Function Signature](#function-signature)
        - [Parameters](#parameters)
        - [Return Value](#return-value)
    - [composeKey Function](#composekey-function)
        - [Function Signature](#function-signature-1)
        - [Parameters](#parameters-1)
        - [Return Value](#return-value-1)
    - [append Function](#append-function)
        - [Function Signature](#function-signature-2)
        - [Parameters](#parameters-2)
        - [Return Value](#return-value-2)
- [Usage](#usage)
- [Summary](#summary)

### objectToFormData Function

The `objectToFormData` function converts an object into a `FormData` object, which is commonly used to prepare data for sending in HTTP requests, particularly when uploading files or form data.

#### Function Signature

```typescript
export const objectToFormData = (
    source: Record<string, FormDataConvertible>,
    form: FormData = new FormData(),
    parentKey: string | null = null,
): FormData => { ... };
```

#### Parameters

- `source`: A JavaScript object (`Record<string, FormDataConvertible>`) to be converted into `FormData`. The object properties will be converted into form fields.
- `form` (optional): A `FormData` object where the form fields will be appended. If not provided, a new `FormData` object is created.
- `parentKey` (optional): A string used to denote a parent key for form field names. This is mainly used to create nested field names.

#### Return Value

- A `FormData` object containing the form fields generated from the `source` object.

### composeKey Function

The `composeKey` function is a utility function used by `objectToFormData` to create keys for form fields in the `FormData` object.

#### Function Signature

```typescript
const composeKey = (
    parent: string | null,
    key: string
): string => { ... };
```

#### Parameters

- `parent`: A string representing the parent key. If `null`, the `key` is used as is. If not `null`, the `key` is appended to the `parent` key, separated by square brackets.
- `key`: A string representing the key of the form field.

#### Return Value

- A string representing the composed key for the form field.

### append Function

The `append` function is a utility function used by `objectToFormData` to append values to the `FormData` object based on their data types.

#### Function Signature

```typescript
const append = (
    form: FormData,
    key: string,
    value: FormDataConvertible
): void => { ... };
```

#### Parameters

- `form`: A `FormData` object to which the form field is appended.
- `key`: A string representing the name of the form field.
- `value`: A value that is appended to the `FormData`. The type of the value determines how it is appended.

#### Return Value

- `void`: The function does not return a value.

## Usage

The `objectToFormData` function is commonly used to prepare data for HTTP requests, particularly when working with forms that contain file uploads. By converting an object into `FormData`, you can structure the data in a way that is suitable for sending via POST or PUT requests.

Here's an example of how to use the `objectToFormData` function:

```javascript
import { objectToFormData } from './objectToFormData';

const data = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: new File([/* file content */], 'avatar.png'),
    additionalInfo: {
        age: 30,
        city: 'New York',
    },
};

const formData = objectToFormData(data);

// Now, 'formData' contains the structured form data
// ready to be sent in an HTTP request.
```

## Summary

The `objectToFormData` function and its associated utility functions, `composeKey` and `append`, allow you to easily convert a JavaScript object into a `FormData` object, which is especially useful when preparing data for HTTP requests. This simplifies the process of sending form data or file uploads in web applications.
