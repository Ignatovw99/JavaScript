function solve(employeesJson, criteria) {

    let employees = JSON.parse(employeesJson);
    let criteriaParam = criteria.split('-')[0];
    let criteriaValue = criteria.split('-')[1];

    function filterCriteria() {
        if (criteriaValue == 'all') {
            return true;
        }
        return this[criteriaParam] == criteriaValue;
    }

    return employees
            .filter(employee => filterCriteria.call(employee))
            .map((employee, index) => `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
            .reduce((resultAcc, current) => resultAcc += (current + '\n'), '')
            .trim();
}

let result = solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)

console.log(result);