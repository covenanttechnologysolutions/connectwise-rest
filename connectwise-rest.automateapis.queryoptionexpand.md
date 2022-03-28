<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [connectwise-rest](./connectwise-rest.md) &gt; [AutomateAPIs](./connectwise-rest.automateapis.md) &gt; [QueryOptionExpand](./connectwise-rest.automateapis.queryoptionexpand.md)

## AutomateAPIs.QueryOptionExpand type

<b>Signature:</b>

```typescript
export declare type QueryOptionExpand = {
    fieldName?: string;
    page?: number;
    pageSize?: number;
    condition?: string;
    expands?: {
        [key: string]: QueryOptionExpand;
    };
    orderBy?: OrderBy;
    includedFields?: string[];
    excludedFields?: string[];
};
```