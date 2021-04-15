const num: number = 10;

const bool: boolean = true;

const str: string = "String tipada";

const list : number[] = [1,2,3];

const list2: Array<number> = [1,2,3];

const tuple: [string, number] = ['Teste', 2];

enum Day{Monday, Tuesday};
let day : Day = Day.Monday;

enum DayPersonalize{Monday = 'M', Tuesday = 'T'};
let day2 : DayPersonalize = DayPersonalize.Monday;

let algumaCoisa : any = "Eu sou uma string";
algumaCoisa = 123
algumaCoisa = {
    "descricao" : "Agora eu sou um objeto"
}
algumaCoisa = ['Agora eu sou um array']
algumaCoisa = true

let algumaString = <string> algumaCoisa;
let algumBoolean = <boolean> algumaCoisa;




