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
 
//1.c

const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

//copy of studentObj is made using spreadoperator and then add function is called
const newStudent ={...studentObj}
const add =(newStudent )=>{
    //skills are added to respective arrays
    newStudent.skills.frontEnd.push({skill:'Bootstrap',level:8})
    newStudent.skills.backEnd.push({skill:'Express',level:9})
    newStudent.skills.dataBase.push({skill:'SQL',level:8})
    newStudent.skills.dataScience.push('SQL')
    console.log("n",newStudent.skills)
    //console.log(newStudent.skills)
    return newStudent
    
}
add(newStudent)

//1.d

const findLengthKeys =(obj)=>{
    //Object.keys() returns properties of object stored in an array in same order
    //console.log(Object.keys(obj))
  return  Object.keys(obj).length
}
console.log(findLengthKeys(studentObj))

const findLengthValues =(obj)=>{
    //Object.values() returns property values of object stored in an array in same order
    //console.log(Object.values(obj))
    return Object.values(obj).length
}
console.log(findLengthValues(studentObj))

const findLengthSkill =(obj)=>{
    //length of skillobject keys
    console.log(Object.keys(obj.skills))
    return Object.keys(obj.skills).length
}
console.log(findLengthSkill(studentObj))


const isGraphicDesign =(obj)=>{
    Object.values(obj.skills) === 'Graphic Design' ?
    console.log('true') : console.log('false')
}
isGraphicDesign(studentObj)


//iterate through the object
const iterate =(obj)=>{
    //Object.keys() returns properties of object stored in an array in same order
    for (let i = 0; i < Object.keys(obj).length; i++) {
        //loops through the array of keys of object
        console.log(Object.keys(obj)[i])
    }
    
}
iterate(studentObj)


