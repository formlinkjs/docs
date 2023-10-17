---
outline: deep
---

# Form

This API reference guide provides detailed information on the `Form` class and its methods. The `Form` class is a utility for handling form data and performing HTTP requests in a frontend application.

## Table of Contents

- [Table of Contents](#table-of-contents)
  - [Constructor](#constructor)
  - [Static Method: `create`](#static-method-create)
  - [Instance Method: `get`](#instance-method-get)
  - [Instance Method: `post`](#instance-method-post)
  - [Instance Method: `put`](#instance-method-put)
  - [Instance Method: `patch`](#instance-method-patch)
  - [Instance Method: `delete`](#instance-method-delete)
  - [Instance Method: `submit`](#instance-method-submit)
  - [Instance Method: `withData`](#instance-method-withdata)
  - [Instance Method: `withOptions`](#instance-method-withoptions)
  - [Instance Method: `getData`](#instance-method-getdata)
  - [Instance Method: `transform`](#instance-method-transform)
  - [Instance Method: `reset`](#instance-method-reset)
  - [Instance Method: `getField`](#instance-method-getfield)
  - [Instance Method: `setField`](#instance-method-setfield)
  - [Instance Method: `getOptions`](#instance-method-getoptions)
  - [Instance Method: `setHttpHandler`](#instance-method-sethttphandler)
  - [Instance Method](#instance-method)
  - [Instance Method: `setErrorHandler`](#instance-method-seterrorhandler)
  - [Instance Method: `getErrorHandler`](#instance-method-geterrorhandler)
  - [Instance Method: `clearErrors`](#instance-method-clearerrors)
  - [Instance Method: `isProcessing`](#instance-method-isprocessing)
  - [Instance Method: `setProcessing`](#instance-method-setprocessing)
  - [Instance Method: `isSuccessful`](#instance-method-issuccessful)
  - [Instance Method: `setSuccessful`](#instance-method-setsuccessful)
  - [Instance Method: `isRecentlySuccessful`](#instance-method-isrecentlysuccessful)
  - [Instance Method: `setRecentlySuccessful`](#instance-method-setrecentlysuccessful)
  - [Instance Method: `getInitial`](#instance-method-getinitial)
  - [Instance Method: `getIsDirty`](#instance-method-getisdirty)
  - [Instance Method: `setIsDirty`](#instance-method-setisdirty)
  - [Instance Method: `validateRequestType`](#instance-method-validaterequesttype)

### Constructor

```javascript
constructor(data: Record<string, any> = {}, options?: Partial<FormOptions>)
```

- Creates a new `Form` instance.
- Parameters:
    - `data` (optional): A record of initial form data.
    - `options` (optional): An object containing form options.
- Returns: A `Form` instance.

### Static Method: `create`

```javascript
static create(data?: Record<string, any>, options?: Partial<FormOptions>)
```

- Creates a new static instance of the `Form` object.
- Parameters:
    - `data` (optional): A record of initial form data.
    - `options` (optional): An object containing form options.
- Returns: A `Form` instance.

### Instance Method: `get`

```javascript
async get(url: URL | string, options?: Partial<FormOptions>): Promise<any>
```

- Makes a GET request to the specified endpoint.
- Parameters:
    - `url`: The URL or string of the endpoint.
    - `options` (optional): An object containing additional options for the request.
- Returns: A Promise that resolves with the response data.

### Instance Method: `post`

```javascript
async post(url: URL | string, options?: Partial<FormOptions>): Promise<any>
```

- Makes a POST request to the specified endpoint.
- Parameters:
    - `url`: The URL or string of the endpoint.
    - `options` (optional): An object containing additional options for the request.
- Returns: A Promise that resolves with the response data.

### Instance Method: `put`

```javascript
async put(url: URL | string, options?: Partial<FormOptions>): Promise<any>
```

- Makes a PUT request to the specified endpoint.
- Parameters:
    - `url`: The URL or string of the endpoint.
    - `options` (optional): An object containing additional options for the request.
- Returns: A Promise that resolves with the response data.

### Instance Method: `patch`

```javascript
async patch(url: URL | string, options?: Partial<FormOptions>): Promise<any>
```

- Makes a PATCH request to the specified endpoint.
- Parameters:
    - `url`: The URL or string of the endpoint.
    - `options` (optional): An object containing additional options for the request.
- Returns: A Promise that resolves with the response data.

### Instance Method: `delete`

```javascript
async delete(url: URL | string, options?: Partial<FormOptions>): Promise<any>
```

- Makes a DELETE request to the specified endpoint.
- Parameters:
    - `url`: The URL or string of the endpoint.
    - `options` (optional): An object containing additional options for the request.
- Returns: A Promise that resolves with the response data.

### Instance Method: `submit`

```javascript
async submit(method: RequestTypes, url: URL | string, options: Partial<FormOptions> = this.options): Promise<any>
```

- Makes a request of the given type to the specified endpoint.
- Parameters:
    - `method`: The type of request (e.g., GET, POST, PUT, PATCH, DELETE).
    - `url`: The URL or string of the endpoint.
    - `options` (optional): An object containing additional options for the request.
- Returns: A Promise that resolves with the response data.

### Instance Method: `withData`

```javascript
withData(data: Record<string, any>): Form
```

- Assigns data to the current instance of the `Form` object.
- Parameters:
    - `data`: A record of form data.
- Returns: The updated `Form` instance.

### Instance Method: `withOptions`

```javascript
withOptions(options?: Partial<FormOptions>): Form
```

- Assigns options to be used by the current instance of the `Form` object.
- Parameters:
    - `options` (optional): An object containing form options.
- Returns: The updated `Form` instance.

### Instance Method: `getData`

```javascript
getData(): Record<string, any>
```

- Returns all data as an object assigned to the `Form` object.

### Instance Method: `transform`

```javascript
transform(callback: (data: Record<string, any>) => void): Form
```

- Calls the provided callback function with the form data.
- Parameters:
    - `callback`: A callback function that operates on the form data.
- Returns: The updated `Form` instance.

### Instance Method: `reset`

```javascript
reset(): void
```

- Saves the current data to the initial data object and empties the current data registry.

### Instance Method: `getField`

```javascript
getField(field: string): any
```

- Gets the value of the specified field.

### Instance Method: `setField`

```javascript
setField(field: string, value: any): void
```

- Sets the value of the specified field.

### Instance Method: `getOptions`

```javascript
getOptions(): FormOptions
```

- Returns all form options.

### Instance Method: `setHttpHandler`

```javascript
setHttpHandler(http: AxiosStatic): Form
```

- Sets the default HTTP handler instance to use for form submission.

### Instance Method

: `getHttpHandler`

```javascript
getHttpHandler(): AxiosInstance
```

- Gets the default HTTP handler instance.

### Instance Method: `setErrorHandler`

```javascript
setErrorHandler(errorHandler: ErrorHandlerInterface): Form
```

- Sets the default error handler instance.

### Instance Method: `getErrorHandler`

```javascript
getErrorHandler(): ErrorHandlerInterface
```

- Gets the default error handler instance.

### Instance Method: `clearErrors`

```javascript
clearErrors(): void
```

- Clears error messages for the form inputs.

### Instance Method: `isProcessing`

```javascript
isProcessing(): boolean
```

- Determines if the form submission is still in progress.

### Instance Method: `setProcessing`

```javascript
setProcessing(state: boolean): void
```

- Sets the status properties to indicate form submission is in progress.

### Instance Method: `isSuccessful`

```javascript
isSuccessful(): boolean
```

- Determines if the form submission was successful.

### Instance Method: `setSuccessful`

```javascript
setSuccessful(state: boolean): void
```

- Sets the status properties to indicate form submission was successful.

### Instance Method: `isRecentlySuccessful`

```javascript
isRecentlySuccessful(): boolean
```

- Determines if the form was recently submitted, completed, and was successful.

### Instance Method: `setRecentlySuccessful`

```javascript
setRecentlySuccessful(state: boolean): void
```

- Sets the status properties to indicate that the form was recently submitted and was successful.

### Instance Method: `getInitial`

```javascript
getInitial(field: string): any
```

- Get initial/original value of given field.

### Instance Method: `getIsDirty`

```javascript
getIsDirty(): boolean
```

- Determines if the form has been modified.

### Instance Method: `setIsDirty`

```javascript
setIsDirty(state: boolean): void
```

- Sets the status properties to indicate that the form has been modified.

### Instance Method: `validateRequestType`

```javascript
validateRequestType(method: RequestTypes): void
```

- Determines if the given request type is supported.

This API reference guide covers the public methods and properties of the `Form` class, providing comprehensive information on how to use this utility for handling form data and making HTTP requests in a frontend application.
