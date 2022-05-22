const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];

//2.a

//a

const signUp = (arr,username,email,password) => {
 //check if user already exist and returns a boolean value
    const newUser = arr.some(user => user.email === email);
    //if it is true then return a message else user will be added to users array
    //newDate() adds current date and time
    newUser? console.log('User already exists'):arr.push({username,email,password,createdAt:new Date(),isLoggedIn:false});
    return arr;
  
}
console.log(signUp(users,'Jaseela','jasee@gmail.com','Jaseela'))

//b 
const SignIn = (arr,email,password) => {
    //check if email and password is correct and returns a boolean value
    const user = arr.find(user => user.email === email && user.password === password);
    //if it is true then return a message else user will be added to users array
    user? user.isLoggedIn=true:console.log('Login failed');
    return arr;
}
console.log(SignIn(users,'jasee@gmail.com','Jaseela'))

