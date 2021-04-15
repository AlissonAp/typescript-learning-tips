
//Interface permite o merge de propriedades, type não
interface Profession {
    name: string;
}

interface Profession {
    salary: number;
}

const dev: Profession = {
    name: 'John',
    salary: 2500
}

//Types permitem realizar maps de propriedades, interfaces não
type TStringify<T> = {
    [P in keyof T]: string;
}

// interface IStringify<T> {
//     [P in keyof T]: string;
// }

//Type pode ser utilizado apenas como um alias de um tipo já primitvo
type UserEmail = string;


//A documentação do TypeScript sugere que se use por padrão sempre
//interfaces, se não for possível, usa-se types.







