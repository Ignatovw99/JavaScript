function arrayMap(array, mapFunction) {
    return array
        .reduce((mappedResult, currentElement) => [...mappedResult, mapFunction(currentElement)], []); //Aray destructuration
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); 
