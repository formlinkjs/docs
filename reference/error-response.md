# Error Response

This API reference guide provides detailed information on the `ErrorResponse` type which extends `AxiosError` class and its properties and methods, which are used for handling errors in HTTP requests made with Axios.

## Table of Contents

- [Table of Contents](#table-of-contents)
    - [AxiosError Class](#axioserror-class)
        - [Properties](#properties)
        - [Constructor](#constructor)
        - [Methods](#methods)
    - [ErrorResponse Type](#errorresponse-type)
- [Usage](#usage)
- [Summary](#summary)

### AxiosError Class

The `AxiosError` class represents an error that occurs when making an HTTP request using Axios. It extends the native JavaScript `Error` class and adds Axios-specific properties and methods for handling the error.

#### Properties

1. `config`
   - Type: `InternalAxiosRequestConfig<D> | undefined`
   - Description: The Axios request configuration for the failed request. It includes information such as the HTTP method, URL, request headers, and more.

2. `code`
   - Type: `string | undefined`
   - Description: A code or identifier associated with the error, which can help categorize and distinguish different types of errors. This code is typically used to provide additional information about the error.

3. `request`
   - Type: `any | undefined`
   - Description: The request object associated with the error. This may include details about the request, such as the URL and headers.

4. `response`
   - Type: `AxiosResponse<T, D> | undefined`
   - Description: The Axios response object that contains information about the HTTP response. This includes the response data, status code, headers, and more.

5. `isAxiosError`
   - Type: `boolean`
   - Description: A boolean value that indicates whether the error is an Axios-specific error. It is set to `true` for instances of `AxiosError`.

6. `status`
   - Type: `number | undefined`
   - Description: The HTTP status code of the response. This property may be `undefined` if no response was received.

7. `cause`
   - Type: `Error | undefined`
   - Description: An optional property that references the original cause of the error. This can be another `Error` instance that led to the Axios error.

8. `toJSON`
   - Type: `() => object`
   - Description: A method that returns a JSON representation of the error, including its properties. This is useful for serializing the error for logging or communication.

#### Constructor

The `AxiosError` class has a constructor that allows you to create instances of Axios errors. It takes several optional parameters:

- `message` (optional): A custom error message.
- `code` (optional): An error code or identifier.
- `config` (optional): The Axios request configuration.
- `request` (optional): The request object.
- `response` (optional): The Axios response object.

#### Methods

1. `from<T = unknown, D = any>(error: Error | unknown, code?: string, config?: InternalAxiosRequestConfig<D>, request?: any, response?: AxiosResponse<T, D>, customProps?: object): AxiosError<T, D>`
   - Description: A static method that creates an `AxiosError` instance from a given error or other unknown object. This method allows you to customize the error by specifying an error code, request configuration, response, and custom properties.

2. Static Constants
   - The `AxiosError` class defines several static constants that represent common error codes, such as timeouts, network errors, and bad responses. These constants can be useful for identifying specific error conditions when working with Axios errors.

### ErrorResponse Type

The `ErrorResponse` type is an alias for `AxiosError<Response, any>`. It represents an Axios error specifically related to HTTP responses and can be used to handle and interact with Axios errors in your application.

## Usage

The `AxiosError` class and the associated `ErrorResponse` type are commonly used when making HTTP requests with Axios to handle errors that may occur during the request or response process. They allow you to access error details, such as the response status, error codes, and request configurations, and customize error handling based on specific error conditions.

```javascript
import { AxiosError } from 'axios';
import { Response } from './../http/response';

// Creating an Axios error instance
const axiosError = new AxiosError('Request failed', 'ERR_NETWORK', axiosConfig, axiosRequest, axiosResponse);

// Handling Axios errors
if (axiosError.isAxiosError) {
    console.error('Axios error occurred:', axiosError.message);
    console.error('Error code:', axiosError.code);
    console.error('HTTP status code:', axiosError.status);
    console.error('Response data:', axiosError.response?.data);
}

// Creating an ErrorResponse instance
const errorResponse: ErrorResponse = axiosError;

// Using ErrorResponse for error handling
if (errorResponse.isAxiosError) {
    console.error('Axios error occurred:', errorResponse.message);
    console.error('Error code:', errorResponse.code);
    console.error('HTTP status code:', errorResponse.status);
    console.error('Response data:', errorResponse.response?.data);
}
```

## Summary

The `AxiosError` class and `ErrorResponse` type are essential tools for handling errors when making HTTP requests using Axios. They provide structured error information and allow you to build robust error-handling mechanisms in your application. Use them to identify, categorize, and respond to various error scenarios that may arise during network requests.
