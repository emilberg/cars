import { getCars } from '../api/mockAPI'; 
import { CARS_LOADED } from './actionTypes';

export function loadMockData() {
    let cars = getCars();

    return {
        type: CARS_LOADED,
        cars: cars
    };
}
