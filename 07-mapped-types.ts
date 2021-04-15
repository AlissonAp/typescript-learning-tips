interface Person {
    name: string;
    age: number
}

const person: Person = {
    name: 'Alisson',
    age: 23,
}

//Tornar propriedades de Person opcionais
const personPartial: Partial<Person> = {
    name: 'Alisson'
}

//Tornar propriedades de Person somente leitura
const personReadonly: Readonly<Person> ={
    name: 'Alisson',
    age: 23,
}

type Stringify<T> = {
    readonly [P in keyof T]: string | number;
}
//Tornar propriedades de Person como tipo String
const stringPerson: Stringify<Person> = {
    name: 'Alisson',
    age: '23'
}
