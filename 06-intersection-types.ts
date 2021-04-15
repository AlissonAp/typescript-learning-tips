interface Person {
    name: string;
    age: number
}

//Intersection types funcionam tanto para types quanto para interfaces
type Address = {
    street: string;
    zipCode: string
}


const personWithAddress: Person & Address = {
    name : 'Alisson',
    age : 23,
    street : 'Rua Benjamin',
    zipCode : '99999999'
}

function merge<First, Second>(obj1: First, obj2: Second): First & Second {
    return {...obj1, ...obj2}
}


const personWithAddressFunction = merge({name : 'Alisson'}, 
{ idade : 23})

personWithAddressFunction.idade = 24
