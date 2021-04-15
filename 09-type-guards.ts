interface Developer {
    name: string;
    language: string;
}

interface Designer {
    name: string;
    software: string;
}

const developer: Developer = { name: 'Alisson', language: 'Python' };
const designer: Designer = { name: 'Alisson', software: 'Photoshop' };

function isDeveloper(person: Developer | Designer): person is Developer{
    return 'language' in person;
}

function printSkill(person: Developer | Designer): void {
    if(isDeveloper(person)){
        console.log(person.language)
    }else{
        console.log(person.software)
    }
}

