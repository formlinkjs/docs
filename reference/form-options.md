# Form Options

This API reference guide provides detailed information on the `FormOptions` type and its properties for configuring form behavior in your application.

## Form Options Type: `FormOptions`

`FormOptions` is a type definition used to configure form behavior and options in your application.

## Properties

1. `resetOnSuccess`
   - Type: `boolean`
   - Default: `undefined`
   - Description: Controls whether form input values should be reset to their initial state when the request is successful.

2. `setInitialOnSuccess`
   - Type: `boolean`
   - Default: `undefined`
   - Description: Controls whether form input values should be set to their initial values when the request is successful.

3. `preserveState`
   - Type: `boolean`
   - Default: `undefined`
   - Description: Controls whether the state of the page should be preserved after the request is successful.

4. `preserveScroll`
   - Type: `boolean`
   - Default: `undefined`
   - Description: Controls whether the scroll position should be preserved after the request is successful.

5. `baseUrl`
   - Type: `URL | string`
   - Default: `undefined`
   - Description: Specifies the base URL for all form submission requests.

6. `token`
   - Type: `string`
   - Default: `undefined`
   - Description: Specifies the API/Bearer authentication token to be used in form requests.

7. `http`
   - Type: `AxiosStatic`
   - Default: `undefined`
   - Description: Provides the HTTP client instance that will be used to send form requests.

8. `errorHandler`
   - Type: `ErrorHandlerInterface`
   - Default: `undefined`
   - Description: Specifies the error handler instance that will be used to handle errors resulting from form requests.

9. `only`
   - Type: `string[]`
   - Default: `undefined`
   - Description: Defines an array of form field names. Only the values of these fields will be included in form submissions.

10. `onBefore`
    - Type: `Function`
    - Default: `undefined`
    - Description: A callback function to be executed before the form request is sent.

11. `onCancel`
    - Type: `Function`
    - Default: `undefined`
    - Description: A callback function to be executed when the form request is canceled.

12. `onSuccess`
    - Type: `(response: Response) => void`
    - Default: `undefined`
    - Description: A callback function to be executed when the form request is successful. It receives the response as a parameter.

13. `onFail`
    - Type: `(error: ErrorResponse) => void`
    - Default: `undefined`
    - Description: A callback function to be executed when the form request fails. It receives the error response as a parameter.

14. `onFinish`
    - Type: `Function`
    - Default: `undefined`
    - Description: A callback function to be executed when the form request is completed, regardless of success or failure.

## Summary

The `FormOptions` type provides a flexible configuration mechanism for handling form behavior in your application. You can customize how forms behave, including resetting values, preserving state, specifying a base URL, and defining callback functions to respond to various stages of the form request lifecycle.
