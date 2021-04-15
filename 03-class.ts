//public
//private
//protected

class People {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    print():void {
        console.log(`name: ${this.name}`);
    }
}

class Employee2 extends People {

    salary: number;

    constructor(name: string, salary: number){
        super(name);
        this.salary = salary;
    }

    print():void{
        super.print();
        console.log(`salary: ${this.salary}`);
    }
}

let people = new People("Alisson");
people.print();

let employee2 = new Employee2("Alisson", 2500);
employee2.print();
