import { THereMapsClustering } from '../types';
import { IHereMaps } from './here-maps';

export interface IHereMapsWithClusteringNamespace extends IHereMaps {

    clustering: THereMapsClustering;

}
