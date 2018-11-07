import { THereMapsService } from '../types';
import { IHereMaps } from './here-maps';

export interface IHereMapsWithServiceNamespace extends IHereMaps {

    service: THereMapsService;

}
