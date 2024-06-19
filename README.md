# FASTOTP Nodejs SDK

Nodejs SDK for FASTOTP

## Table of Contents

1. [Installation](#installation)
2. [Initialization](#initialization)
3. [Usage](#usage)
4. [Contribution Guidelines](#contribution-guidelines)

## Installation

```sh
$ npm i fastoptsdk
```

## Initialization

## env

```env
CLIENT_API_KEY='clientApiKey'
```

```js
const fastOtpClient = require("fastotpsdk")({
  clientApiKey: process.env.CLIENT_API_KEY,
});
```

You can get your clientApiKey from [FastOtp dashboard](https://docs.fastotp.co/introduction)

## Usage

**GenerateOTP**

```js
const generateOtp = await fastOtpClient.generate.generateOtp({
    type,
    identifier,
    email,
    validity
    token_length,
  })
```

**ValidateOtp**

```js
const validateOtp = fastOtpClient.validateOtp.validateOtp({
  token,
  identifier,
});
```

**GetOtp**

```js
const getOtp = fastOtpClient.getOtp.getOtp({ id });
```

## Contribution Guidelines

Contributions are welcome and encouraged. 
To contribute, fork this repo and raise a PR to the master branch, I will test and aprove if all is well.
Please read [here](https://github.com/Juliet-chime/fastotpsdk/blob/main/CONTRIBUTING.md)

© [Chime Juliet Somtochukwu]()

[npm-image]: https://badge.fury.io/js/fastoptsdk.svg
[npm-url]: https://badge.fury.io/js/fastoptsdk
