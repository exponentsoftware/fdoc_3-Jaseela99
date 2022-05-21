//1.a
/*  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
 //array destructuring
 //spread operator is used to clone the array 
 const [name,[...skills],[...scores]] = student
 console.log(name,skills,scores) 
 
 //to skip an element while destructuring then we use an extra comma(,)
const [,,jsScore,reactScore] = scores
console.log(jsScore,reactScore)
 */
//1.b

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (arr) => {
    let array = []
    var obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj = {
            name: arr[i][0],
            skills: arr[i][1],
            scores: arr[i][2]
        }
        array.push(obj)

        
    }
    
    return array
}

console.log(convertArrayToObject(students))
