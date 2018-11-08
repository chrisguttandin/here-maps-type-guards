# here-maps-type-guards

**A guarded version of the TypeScript type definitions for HERE Maps.**

[![tests](https://img.shields.io/travis/chrisguttandin/here-maps-type-guards/master.svg?style=flat-square)](https://travis-ci.org/chrisguttandin/here-maps-type-guards)
[![dependencies](https://img.shields.io/david/chrisguttandin/here-maps-type-guards.svg?style=flat-square)](https://www.npmjs.com/package/here-maps-type-guards)
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

All guards expect that you have defined a variable somewhere which potentially holds a reference to the global H object provided by HERE Maps.

```typescript
const H: unknown = (typeof window === 'object') ? (<any> window).H : undefined;
```

### isHereMaps

This is a guard which checks the availability of the core module.

```typescript
if (isHereMaps(H)) {
    // H is not unknown anymore.
}
```

### isHereMapsWithClusteringNamespace

This is a guard which checks the availability of the clustering module which includes a check for the core module.

```typescript
if (isHereMapsWithClusteringNamespace(H)) {
    // H is not unknown anymore.
    // H.clustering is also defined.
}
```

### isHereMapsWithDataNamespace

This is a guard which checks the availability of the data module which includes a check for the core module.

```typescript
if (isHereMapsWithDataNamespace(H)) {
    // H is not unknown anymore.
    // H.data is also defined.
}
```

### isHereMapsWithMapEventsNamespace

This is a guard which checks the availability of the mapevents module which includes a check for the core module.

```typescript
if (isHereMapsWithMapEventsNamespace(H)) {
    // H is not unknown anymore.
    // H.mapevents is also defined.
}
```

### isHereMapsWithServiceNamespace

This is a guard which checks the availability of the service module which includes a check for the core module.

```typescript
if (isHereMapsWithServiceNamespace(H)) {
    // H is not unknown anymore.
    // H.service is also defined.
}
```

## Motivation

I also wrote a [blog post](https://media-codings.com/articles/using-typescripts-new-unknown-type-to-safely-handle-global-third-party-libraries) which explains why I actually created this module.
