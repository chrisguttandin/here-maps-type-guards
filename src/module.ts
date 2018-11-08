import {
    IHereMaps,
    IHereMapsWithClusteringNamespace,
    IHereMapsWithDataNamespace,
    IHereMapsWithMapEventsNamespace,
    IHereMapsWithServiceNamespace,
    IHereMapsWithUiNamespace
} from './interfaces';

export * from './interfaces';
export * from './types';

export const H: unknown = (typeof window === 'object') ? (<any> window).H : undefined;

export const isHereMaps = (H: unknown): H is IHereMaps => { // tslint:disable-line:no-shadowed-variable
    return typeof H === 'object' && H !== null && 'geo' in H && 'Map' in H && 'map' in H && 'math' in H && 'util' in H;
};

export const isHereMapsWithClusteringNamespace = (H: unknown): H is IHereMapsWithClusteringNamespace => { // tslint:disable-line:max-line-length no-shadowed-variable
    return isHereMaps(H) && 'clustering' in H;
};

export const isHereMapsWithDataNamespace = (H: unknown): H is IHereMapsWithDataNamespace => { // tslint:disable-line:no-shadowed-variable
    return isHereMaps(H) && 'data' in H;
};

export const isHereMapsWithMapEventsNamespace = (H: unknown): H is IHereMapsWithMapEventsNamespace => { // tslint:disable-line:max-line-length no-shadowed-variable
    return isHereMaps(H) && 'mapevents' in H;
};

export const isHereMapsWithServiceNamespace = (H: unknown): H is IHereMapsWithServiceNamespace => { // tslint:disable-line:max-line-length no-shadowed-variable
    return isHereMaps(H) && 'service' in H;
};

export const isHereMapsWithUiNamespace = (H: unknown): H is IHereMapsWithUiNamespace => { // tslint:disable-line:no-shadowed-variable
    return isHereMaps(H) && 'ui' in H;
};
