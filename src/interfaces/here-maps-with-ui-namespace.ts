import { THereMapsUi } from '../types';
import { IHereMaps } from './here-maps';

export interface IHereMapsWithUiNamespace extends IHereMaps {
    ui: THereMapsUi;
}
