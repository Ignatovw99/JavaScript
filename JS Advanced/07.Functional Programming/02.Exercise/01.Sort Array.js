function sortArray(array, orderCiteria) {
    const sortFunction = (first, second) => {
        if (orderCiteria == 'asc') {
            return first - second;
        } else if (orderCiteria == 'desc') {
            return second - first;
        }
        return 0;
    }

    return array.sort(sortFunction);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));