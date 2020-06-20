import {
    IHereMaps,
    IHereMapsWithClusteringNamespace,
    IHereMapsWithDataNamespace,
    IHereMapsWithMapEventsNamespace,
    IHereMapsWithServiceNamespace,
    IHereMapsWithUiNamespace
} from './interfaces';

/*
 * @todo Explicitly referencing the barrel file seems to be necessary when enabling the
 * isolatedModules compiler option.
 */
export * from './interfaces/index';
export * from './types/index';

export const H: unknown = typeof window === 'object' ? (<any>window).H : undefined;

// tslint:disable-next-line:no-shadowed-variable
export const isHereMaps = (H: unknown): H is IHereMaps => {
    return typeof H === 'object' && H !== null && 'geo' in H && 'Map' in H && 'map' in H && 'math' in H && 'util' in H;
};

// tslint:disable-next-line:no-shadowed-variable
export const isHereMapsWithClusteringNamespace = (H: unknown): H is IHereMapsWithClusteringNamespace => {
    return isHereMaps(H) && 'clustering' in H;
};

// tslint:disable-next-line:no-shadowed-variable
export const isHereMapsWithDataNamespace = (H: unknown): H is IHereMapsWithDataNamespace => {
    return isHereMaps(H) && 'data' in H;
};

// tslint:disable-next-line:no-shadowed-variable
export const isHereMapsWithMapEventsNamespace = (H: unknown): H is IHereMapsWithMapEventsNamespace => {
    return isHereMaps(H) && 'mapevents' in H;
};

// tslint:disable-next-line:no-shadowed-variable
export const isHereMapsWithServiceNamespace = (H: unknown): H is IHereMapsWithServiceNamespace => {
    return isHereMaps(H) && 'service' in H;
};

// tslint:disable-next-line:no-shadowed-variable
export const isHereMapsWithUiNamespace = (H: unknown): H is IHereMapsWithUiNamespace => {
    return isHereMaps(H) && 'ui' in H;
};
