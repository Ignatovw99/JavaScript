const alphabeticalSortCriteria = (a, b) => a.localeCompare(b);

const lengthSortCriteria = (a, b) => a.length - b.length;

function compareFunction(first, second) {
    return lengthSortCriteria(first, second)
        ? lengthSortCriteria(first, second)
        : alphabeticalSortCriteria(first, second);
}

const sort = (a, b) => {
    let result = lengthSortCriteria(a, b);
    return result
        ? result
        : alphabeticalSortCriteria(a, b);
};

function solve(array) {
  array
      .sort(sort)
      // .sort((prev, current) => compareFunction(prev, current))
      .forEach(x => console.log(x));
}

solve(['alpha', 'beta', 'gamma']);