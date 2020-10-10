class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        let isInputValid = username && salary && position && department && (salary >= 0);
        if (!isInputValid) {
            throw new Error('Invalid input!');
        }

        let currentDepartment = this.departments.find(x => x.department === department);
        if (!currentDepartment) {
            let departmentObject = {department, employees: []};
            this.departments.push(departmentObject);
            currentDepartment = departmentObject;
        }
        let employee = {username, salary, position};
        currentDepartment.employees.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let result = '';
        const calculateTotalSalaryOfDepartment = (department) => {
            return department.employees
                .map(employee => employee.salary)
                .reduce((sumAcc, currentSalary) => sumAcc += currentSalary, 0);
        }

        const sortByDepartmentSalaryDesc = (firstDepartment, secondDepartment) => {
            let firstDepartmentTotalSalary = calculateTotalSalaryOfDepartment(firstDepartment);
            let secondDepartmentTotalSalary = calculateTotalSalaryOfDepartment(secondDepartment);
            return firstDepartmentTotalSalary / firstDepartment.employees.length - secondDepartmentTotalSalary / secondDepartment.employees.length;
        }
        
        let bestDepartment = this.departments.sort(sortByDepartmentSalaryDesc)[0];
        let totalSalary = bestDepartment.employees.map(employee => employee.salary).reduce((totalSalary, currentSalary) => totalSalary += currentSalary, 0);
        let bestDepartmentAverageSalary = totalSalary / bestDepartment.employees.length;
        result += `Best Department is: ${bestDepartment.department}\n`;
        result += `Average salary: ${bestDepartmentAverageSalary.toFixed(2)}\n`;

        bestDepartment.employees
            .sort((first, second) => {
                let res = second.salary - first.salary;
                if (!res) {
                    return second.username.localCompare(first.username);
                }
                return res;
            })
            .forEach(employee => result += `${employee.username} ${employee.salary} ${employee.position}\n`);

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());