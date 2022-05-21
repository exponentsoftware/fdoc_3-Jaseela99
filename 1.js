//1.a
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
 //array destructuring
 //spread operator is used to clone the array 
 const [name,[...skills],[...scores]] = student
 console.log(name,skills,scores) 
 
 //to skip an element while destructuring then we use an extra comma(,)
const [,,jsScore,reactScore] = scores
console.log(jsScore,reactScore)
 
//1.b

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (arr) => {
    //array and object is defined
    let array = []
    var obj = {}
    //loop through the array
    for (let i = 0; i < arr.length; i++) {
        obj = {
            name: arr[i][0], //j=1 is name
            skills: arr[i][1],//j=2 is skills
            scores: arr[i][2]//j=3 is scores
        }
        //push the object into the array
        array.push(obj)    
    }
    //return the array
    return array
}

console.log(convertArrayToObject(students))
