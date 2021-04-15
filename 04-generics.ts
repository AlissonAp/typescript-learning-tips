function reverseList<T>(list: Array<T>): Array<T>{
    let reversedList: Array<T> = [];
    return list.reverse()
}

let names = ["Alisson", "Fulano", "Fulano de Tal"];
let numbers = [1,2,3,4,5,6];

let reversedNames = reverseList(names);
let reversedNumbers = reverseList(numbers);

class People2 {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    print():void {
        console.log(`name: ${this.name}`);
    }
}

interface Repository<T, ID> {
    findById(id : ID) : T;
    save(entity: T): T;
}

class ṔeopleRepository implements Repository<People2, number>{
    
    findById(id: number): People2 {
        throw new Error("Method not implemented.");
    }
    save(entity: People2): People2 {
        throw new Error("Method not implemented.");
    }
    
}

interface NumberId {
    id:number;
}

interface Repository2<T, ID extends NumberId> {
    findById(id : ID) : T;
    save(entity: T): T;
}

