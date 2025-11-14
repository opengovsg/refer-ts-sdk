# Opengovsg TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fopengovsg%2Frefer-ts-sdk)
[![npm shield](https://img.shields.io/npm/v/@opengovsg/refx-ts-sdk)](https://www.npmjs.com/package/@opengovsg/refx-ts-sdk)

The Opengovsg TypeScript library provides convenient access to the Opengovsg APIs from TypeScript.

## Table of Contents

- [Installation](#installation)
- [Reference](#reference)
- [Usage](#usage)
- [Request and Response Types](#request-and-response-types)
- [Exception Handling](#exception-handling)
- [Advanced](#advanced)
    - [Additional Headers](#additional-headers)
    - [Retries](#retries)
    - [Timeouts](#timeouts)
    - [Aborting Requests](#aborting-requests)
    - [Runtime Compatibility](#runtime-compatibility)
- [Contributing](#contributing)

## Installation

```sh
npm i -s @opengovsg/refx-ts-sdk
```

## Reference

A full reference for this library is available [here](https://github.com/opengovsg/refer-ts-sdk/blob/HEAD/./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { ReferralExchangeClient } from "@opengovsg/refx-ts-sdk";

const client = new ReferralExchangeClient({ apiKey: "YOUR_API_KEY" });
await client.referrals.upsert({
    patient: {
        uin: "uin",
        name: "name",
        phoneNumber: "91234567",
        dob: "1990-01-01",
        gender: "Male",
    },
    offeringId: "offeringId",
    senderHciCode: "senderHciCode",
    senderInstitutionName: "senderInstitutionName",
    doctorMcr: "doctorMcr",
    doctorName: "doctorName",
    doctorEmail: "doctorEmail",
    doctorContactNumber: "doctorContactNumber",
    isSubsidised: true,
    isUrgent: true,
    isDraft: true,
    formResponses: [
        {
            question: "question",
            id: "id",
            answer: "answer",
        },
    ],
});
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { ReferralExchange } from "@opengovsg/refx-ts-sdk";

const request: ReferralExchange.EligibilityGetRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { ReferralExchangeError } from "@opengovsg/refx-ts-sdk";

try {
    await client.referrals.upsert(...);
} catch (err) {
    if (err instanceof ReferralExchangeError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.referrals.upsert(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.referrals.upsert(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.referrals.upsert(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.referrals.upsert(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { ReferralExchangeClient } from "@opengovsg/refx-ts-sdk";

const client = new ReferralExchangeClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
