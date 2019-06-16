import { THereMapsData } from '../types';
import { IHereMaps } from './here-maps';

export interface IHereMapsWithDataNamespace extends IHereMaps {

    data: THereMapsData;

}
