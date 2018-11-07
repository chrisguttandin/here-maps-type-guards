import { IHereMaps, IHereMapsWithServiceNamespace, IHereMapsWithUiNamespace } from './interfaces';

export * from './interfaces';
export * from './types';

const GLOBAL_H = <unknown> ((typeof window === 'object') ? (<any> window).H : undefined);

export { GLOBAL_H as H };

export const isHereMaps = (H: unknown): H is IHereMaps => { // tslint:disable-line:no-shadowed-variable
    return typeof H === 'object' && H !== null && 'geo' in H && 'Map' in H && 'map' in H && 'math' in H && 'util' in H;
};

export const isHereMapsWithServiceNamespace = (H: unknown): H is IHereMapsWithServiceNamespace => { // tslint:disable-line:max-line-length no-shadowed-variable
    return isHereMaps(H) && 'service' in H;
};

export const isHereMapsWithUiNamespace = (H: unknown): H is IHereMapsWithUiNamespace => { // tslint:disable-line:no-shadowed-variable
    return isHereMaps(H) && 'ui' in H;
};
