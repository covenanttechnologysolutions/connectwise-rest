<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [connectwise-rest](./connectwise-rest.md) &gt; [CWAOptions](./connectwise-rest.cwaoptions.md)

## CWAOptions type


<b>Signature:</b>

```typescript
export declare type CWAOptions = {
    serverUrl: string;
    username?: string;
    password?: string;
    twoFactorPasscode?: string;
    token?: string;
    clientId: string;
    timeout?: number;
    retry?: boolean;
    retryOptions?: RetryOptions;
    logger?: CWLogger;
    debug?: boolean;
};
```