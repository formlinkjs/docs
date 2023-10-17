# HTTP Handler

This API reference guide provides detailed information on the `Http` class and its methods. The `Http` class is designed to handle HTTP requests and provides configurations for making HTTP requests in a frontend application.

## Table of Contents

- [Table of Contents](#table-of-contents)
    - [Constructor](#constructor)
    - [Method: `createInstance`](#method-createinstance)
    - [Method: `withOptions`](#method-withoptions)
    - [Method: `acceptJson`](#method-acceptjson)
    - [Method: `contentType`](#method-contenttype)
    - [Method: `baseUrl`](#method-baseurl)
    - [Method: `setToken`](#method-settoken)
    - [Method: `withCredentials`](#method-withcredentials)
    - [Method: `getClient`](#method-getclient)
- [Properties](#properties)
    - [`config`](#config)
    - [`headers`](#headers)
    - [`client`](#client)
- [Summary](#summary)

### Constructor

```javascript
constructor(client?: AxiosStatic)
```

- Creates a new `Http` instance.
- Parameters:
    - `client` (optional): An AxiosStatic instance to use for making HTTP requests.
- Returns: A `Http` instance.

### Method: `createInstance`

```javascript
createInstance(config?: CreateAxiosDefaults<HttpOptions>): AxiosInstance
```

- Creates a new AxiosInstance with the specified configuration.
- Parameters:
    - `config` (optional): An object containing HTTP request configurations.
- Returns: An AxiosInstance for making HTTP requests.

### Method: `withOptions`

```javascript
withOptions(config: HttpOptions): Http
```

- Sets the HTTP handler configurations.
- Parameters:
    - `config`: An object containing HTTP request configurations to merge with the existing configuration.
- Returns: The updated `Http` instance.

### Method: `acceptJson`

```javascript
acceptJson(): Http
```

- Sets the request headers to accept JSON responses.
- Returns: The updated `Http` instance.

### Method: `contentType`

```javascript
contentType(type?: string): Http
```

- Sets the request headers to specify the content type of the request.
- Parameters:
    - `type` (optional): The content type to be set in the headers.
- Returns: The updated `Http` instance.

### Method: `baseUrl`

```javascript
baseUrl(url?: URL | string): Http
```

- Sets the default base URL for requests.
- Parameters:
    - `url` (optional): The URL or string to set as the base URL.
- Returns: The updated `Http` instance.

### Method: `setToken`

```javascript
setToken(token?: string): Http
```

- Sets an authentication token in the request headers.
- Parameters:
    - `token` (optional): The authentication token to be added to the request headers.
- Returns: The updated `Http` instance.

### Method: `withCredentials`

```javascript
withCredentials(): Http
```

- Sets the request handler to accept credentials.
- Returns: The updated `Http` instance.

### Method: `getClient`

```javascript
getClient(): AxiosStatic | undefined
```

- Gets the AxiosStatic client instance used by the `Http` object.
- Returns: The AxiosStatic client instance or `undefined` if not set.

## Properties

### `config`

```javascript
public config: HttpOptions
```

- An object containing HTTP handler configurations, including options like `withCredentials`, `responseType`, and more.

### `headers`

```javascript
public headers: HttpHeaders
```

- An object representing the HTTP request headers, which can be customized as needed.

### `client`

```javascript
protected client?: AxiosStatic
```

- The Axios client instance used for making HTTP requests.

## Summary

The `Http` class is a versatile utility for handling HTTP requests in a frontend application. It provides methods for configuring HTTP request options, setting request headers, and managing request credentials. By using this class, you can efficiently manage and customize your application's HTTP requests.
