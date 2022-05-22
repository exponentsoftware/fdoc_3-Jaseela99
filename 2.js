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
    const newUser = arr.some(user => user.email === email)
    //if it is true then return a message else user will be added to users array
    //newDate() adds current date and time
    newUser? console.log('User already exists'):arr.push({username,email,password,createdAt:new Date(),isLoggedIn:false})
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

//2.b

const rateProduct = (productArr,userArr,productId,userId,rate) => {
    //finding product by id
    const product = productArr.find(product => product._id === productId);

    //finding user by id
    const user = userArr.find(user => user._id === userId);
    //if product and user is found then add rate to ratings array
    user && product? product.ratings.push({userId,rate}):console.log('Product or user not found');
    return product
}

console.log(rateProduct(products,users,'eedfcf','fg12cy',5))

 const averageRating = (productArr,productId) => {
     //finding product by id
    const product = productArr.find(product => product._id === productId);
    console.log("p",product)
    //userId inside ratings array are added to new array and their length is used to find the rate count
    const rateCount = product.ratings.map(rating => rating.userId).length
    console.log("u",rateCount)
    //to sum the rate of each user
    //reduce() method reduces the array to a single value
    //initial value is 0,prev is the previous value and rating is the current value
    const totalRate = product.ratings.reduce((prev,rating) => prev + rating.rate,0) //0+5-> 5+4.5-> 9.5+5
    console.log("s",totalRate)
    //to find the average rate
    const average = totalRate/rateCount
    console.log("a",average)
    return average
     
} 
console.log(averageRating(products,'eedfcf'))

//2.c

const likeProduct =(productArr,userArr,productId,userId) => {
    //finding product by id
    const product = productArr.find(product => product._id === productId);
    //finding user by id
    const user = userArr.find(user => user._id === userId);
    //if product and user is found then add like to likes array
   user&& product && product.likes && product.likes.userId === userId ?( product.likes.pop(userId), console.log("disliked")):(product.likes.push(userId),console.log("liked"));
    return product
}

console.log(likeProduct(products,users,'aegfal','zwf8md'))