import { THereMapsMapEvents } from '../types';
import { IHereMaps } from './here-maps';

export interface IHereMapsWithMapEventsNamespace extends IHereMaps {

    service: THereMapsMapEvents;

}
