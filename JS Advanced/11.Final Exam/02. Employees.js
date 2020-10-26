function solveClasses() {

    class Developer {

        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            let task = {id, taskName, priority};
            
            if (priority === 'high') {
                this.tasks.unshift(task);
            } else {
                this.tasks.push(task);
            }

            return `Task id ${id}, with ${priority} priority, has been added.`
        }

        doTask() {
            let task = this.tasks.shift();
            if (task === undefined) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            } else {
                return task;
            }
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            let result = ['Tasks, that need to be completed:'];
            this.tasks.forEach(x => result.push(`${x.id}: ${x.taskName} - ${x.priority}`));
            return result.join('\n');
        }
    }

    class Junior extends Developer {

        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience = experience;
        }

        learn(years) {
            this.experience += years;
        }
    }

    class Senior extends Developer {

        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary += bonus;
            this.experience = 5 + experience;
        }

        changeTaskPriority(taksId) {
            let task = this.tasks.find(x => x.id === taksId);
            let {priority} = task;
            let index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
            if (priority === 'high') {
                task.priority = 'low';
                this.tasks.push(task);
            } else {
                task.priority = 'high';
                this.tasks.unshift(task);
            }
            return this.tasks;
        }
        
    }



    return {
        Developer,
        Junior,
        Senior
    }
}