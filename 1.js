//1.a
 const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
 //array destructuring
 //spread operator is used to clone the array 
 const [name,[...skills],[...scores]] = student
 console.log(name,skills,scores) 
 
 //to skip an element while destructuring then we use an extra comma(,)
const [,,jsScore,reactScore] = scores
console.log(jsScore,reactScore)


