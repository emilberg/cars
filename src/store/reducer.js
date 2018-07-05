import { CARS_LOADED, SEARCH_CAR } from './actionTypes'; 
import { removeDuplicateCars } from '../common/Helper';

const initialState = {
    originalCars: [],
    cars: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CARS_LOADED:
            const carList = action.cars,
                carListCleaned = removeDuplicateCars(carList);
            
            return {
                ...state,
                cars: carListCleaned,
                originalCars: carListCleaned
            }

        case SEARCH_CAR:
        
            return {
                ...state,
                cars: state.originalCars.filter( (car) => car.year.toString().startsWith(action.value))
            }
        default:
            return state
    }
};

export default reducer;