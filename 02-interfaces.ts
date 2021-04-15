enum Sex { Male, Female };

interface Person {
    name: string;
    age: number;
    sex?: Sex;
}

let basicPerson: Person = {
    name: 'Alisson',
    age: 24
}

basicPerson.sex = Sex.Male;

interface Employee extends Person {
    salary: number;
}

let employee: Employee = {
    name: 'Alisson',
    age : 24,
    salary: 2_400
}

interface Manager extends Employee {
    readonly bonus: number;
}

let manager: Manager = {
    name: 'Alisson',
    age : 24,
    salary: 2_400,
    bonus: 10
}

//This is not possible because readonly
//manager.bonus = 15;
