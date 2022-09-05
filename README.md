# here-maps-type-guards

**A guarded version of the TypeScript type definitions for HERE Maps.**

[![version](https://img.shields.io/npm/v/here-maps-type-guards.svg?style=flat-square)](https://www.npmjs.com/package/here-maps-type-guards)

This module provides TypeScript type guards which assure TypeScript that a value of type unknown is actually a [HERE Maps](https://here.com) module. It can be thought of as a scoped version of the [@types/heremaps](https://www.npmjs.com/package/@types/heremaps) module.

## Installation

This module is available as [npm package](https://www.npmjs.org/package/here-maps-type-guards). It can be installed with the following command:

```shell
npm install here-maps-type-guards
```

It is not required to include any external type definition files in the tsconfig file in order to use here-maps-type-guards.

## Guards

This module provides a guard for each of the [submodules](https://developer.here.com/documentation/maps/topics/overview.html#overview__modules) available from HERE Maps.

The guards are useful to ensure type safety and to do runtime checks at the same time.

Additionally the globally available `H` object which HERE Maps attaches to the window is also exported. It is of type unknown and needs to be narrowed with at least one guard before it can be used.

### isHereMaps

This is a guard which checks the availability of the core module.

```typescript
import { H, isHereMaps } from 'here-maps-type-guards';

if (isHereMaps(H)) {
    // H is not unknown anymore.
}
```

### isHereMapsWithClusteringNamespace

This is a guard which checks the availability of the clustering module which includes a check for the core module.

```typescript
import { H, isHereMapsWithClusteringNamespace } from 'here-maps-type-guards';

if (isHereMapsWithClusteringNamespace(H)) {
    // H is not unknown anymore.
    // H.clustering is also defined.
}
```

### isHereMapsWithDataNamespace

This is a guard which checks the availability of the data module which includes a check for the core module.

```typescript
import { H, isHereMapsWithDataNamespace } from 'here-maps-type-guards';

if (isHereMapsWithDataNamespace(H)) {
    // H is not unknown anymore.
    // H.data is also defined.
}
```

### isHereMapsWithMapEventsNamespace

This is a guard which checks the availability of the mapevents module which includes a check for the core module.

```typescript
import { H, isHereMapsWithMapEventsNamespace } from 'here-maps-type-guards';

if (isHereMapsWithMapEventsNamespace(H)) {
    // H is not unknown anymore.
    // H.mapevents is also defined.
}
```

### isHereMapsWithServiceNamespace

This is a guard which checks the availability of the service module which includes a check for the core module.

```typescript
import { H, isHereMapsWithServiceNamespace } from 'here-maps-type-guards';

if (isHereMapsWithServiceNamespace(H)) {
    // H is not unknown anymore.
    // H.service is also defined.
}
```

## Motivation

I also wrote a [blog post](https://media-codings.com/articles/using-typescripts-new-unknown-type-to-safely-handle-global-third-party-libraries) which explains why I actually created this module.
