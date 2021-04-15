interface User {
    name: string;
    phone: string;
    email: string;
    password: string;
    age?: number;
}

//Required
type UserRequired = Required<User>;

const userRequired: UserRequired = {
    name: 'Alisson',
    phone: '4235345435',
    email: 'alisson@teste.com',
    password: '23424234',
    age: 23
}

//Partial
type UserPartial = Partial<User>;

const userPartial: UserPartial = {
    name: 'Alisson',
    password: '23424234'
}

//Pick
type UserPick = Pick<User, 'email' | 'password'>;

const userPick: UserPick = {
    email: 'alisson@teste.com',
    password: '23424234'
}

//Omit
type UserOmit = Omit<User, 'phone' | 'name' | 'age'>;

const userOmit: UserOmit = {
    email: 'alisson@teste.com',
    password: '23424234'
}

//Record
interface Post {
    title: string;
    subtitle: string;
}

type Props = 'sports' | 'nutrition'
type PostsRecord = Record<Props, Post[]>

const PostsMappedBySections: PostsRecord = {
    sports: [
        {
            title: 'Internacional ganha o jogo',
            subtitle: 'O gol saiu nos 35 do segundo tempo'
        }
    ],
    nutrition: [
        {
            title: 'Emagrecimento para o verão',
            subtitle: 'Gastando apenas 10 minutos do seu dia'
        }
    ]
}





