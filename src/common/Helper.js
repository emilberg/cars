/* Remove duplicate cars based on registration nr, keep the ones that are of latest model year */
export const removeDuplicateCars = (cars) => {
    const carsWithDuplicates = [...cars],
            carsReturn = [];

    carsWithDuplicates.forEach((car, index) => {
        //add an id to the car to use as a unique id in lists
        car.id = index;

        let isDuplicate = false;
        carsReturn.forEach((carReturn, returnIndex, arr) => {
            //check if car with same reg nr already is in cars to return array
            if (carReturn.reg === car.reg) {
                isDuplicate = true;
                //replace the car to return with the current one since it is of a later year
                if (car.year > carReturn.year) {
                    arr[returnIndex] = car;
                }

            }

        });

        if (!isDuplicate) {
            carsReturn.push(car);
        }

        if (!carsReturn.length) {
            //first 
            carsReturn.push(car);
        }        

    });

    return carsReturn;
}