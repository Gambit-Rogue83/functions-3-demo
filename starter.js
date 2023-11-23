////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

let numArr = [123, 48, 839, 55, 8, 7465]
let strArr = ['Dodge', 'Dip', 'Duck', 'Dive', 'Dodge']

numArr.forEach((num, index) => {
    //this doesn't return anything. Just performs tasks.
    if(num > 500) {
        console.log("That is a large purchase...")
    } else {
        console.log("Cheapskate")
    }
})

let newFilteredArray = strArr.filter((str, i, arr) => {
    if(i === 3){
        return false
    }
    else if(str.length > 3){
        return true
    } else if(str.includes('p')){
        return true
    }
})

console.log(newFilteredArray)

let history = strArr.map((str, i, arr) =>{
    return `I have the ${str} skill, watch me!`
})

console.log(history)


let total = numArr.reduce((acc, cur) =>{
    if(cur > 500){
        return acc + cur
    } else {
        return acc
    }
}, 0)

console.log(total)


let employees = [
    {
        name:"Shaq",
        salary: 250000,
        isAdmin: false,
        trinkets: ['Basketball', 'Mug', 'Shoes']
    },
    {
        name:"Hugh Jackman",
        salary: 400000,
        isAdmin: false,
        trinkets: ['Wolverine Claws', 'Top Hat', 'Les Miserables script']
    },
    {
        name:"God",
        salary: 900000000,
        isAdmin: true,
        trinkets: ['Earth', 'Mountains', 'Rivers', 'Caves', 'Humans', 'Creatures']
    },
    {
        name:"Me",
        salary: 80000,
        isAdmin: false,
        trinkets: ['Laptop', 'Board Games', 'Books', 'Chair' ]
    },
    {
        name:"Child",
        salary: 0,
        isAdmin: false,
        trinkets: ['Paw Patrol', 'Peter Pan Drawing', 'Spider-Man doll', 'Pikachu']
    }
]

let departmenSalary = employees.reduce((acc, cur) => {
    return acc + cur.salary
}, 0)

console.log(departmenSalary)

let overpaidEmployees = employees.filter((emp, index, array) =>{
    if(emp.salary > 400000){
    return true
    } else if(emp.trinkets.length > 3) {
        return true
    }
})


console.log(overpaidEmployees)

overpaidEmployees.forEach((emp, index, arr) =>{
    if(emp.salary > 400000 && emp.trinkets.length > 3) {
        console.log(`${emp.name} is the creator and master of the whole earth`)
    } else if(emp.salary > 80000){
        console.log(`We suggest reducing ${emp.name}'s salary`)
    } else if(emp.trinkets.length > 3){
        console.log(`Make sure ${emp.name} keeps his collection tidy`)
    }
})


const introduce = employees.map((emp, index, arr) =>{
    if(emp.isAdmin){
        return `Hi, my name is ${emp.name}, and I am above all`
    } else {
        return `Hi, I'm ${emp.name}, and I love God`
    }
})

console.log(introduce)

const discussion = employees
.filter((emp, index, arr) =>{
    return emp.trinkets.length > 3
}).map((emp, index, arr) =>{
    return `${emp.name} is sharing all about their ${emp.trinkets.length} belongings`
})


console.log(discussion)



const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''

        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}

// CODE HERE


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map((colors, index) => {
    return 'pink'
})

console.log(mappedColors)

/*
    Edit the formalGreeting function and use the built in .map method
    to map over the names parameter and return a new array with "Hello, "
    appended to the beginning of each name

    Make sure to use arrow functions combined with the map method
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    return names.map(name => `Hello, ${name}`)
}

// Call formalGreeting passing in the formalNames array

const greetings = formalGreeting(formalNames)

console.log(greetings)

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']


const placesThatStartWithA = places.filter(place => place[0] === 'A')

console.log(placesThatStartWithA)


/*
Create a function called identifier that uses the filter higher order array
method to filter over the provided jobs array of objects. The function should
return the object of the person with a job as a programmer Make sure to use
the arrow function in conjunction with the filter method. Your returned value
should be a single object, not an array with one object inside of it Use
arrow functions and the filter method
*/
// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];
// Do not edit the code above.

// CODE HERE

const identifier = jobs => {
    const filtered = jobs.filter(obj => obj.programmer)
    return filtered[0]
}

console.log(identifier(jobs))

//// REDUCE ////

/*
Edit the productOfArray function and use the built in .reduce method to
loop over the numbers parameter and return the product of all the numbers
in the array Make sure to use arrow functions combined with the reduce method
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    const reduce = numbers.reduce((acc, cur) => acc + cur)
    return reduce
}

console.log(productOfArray(numsToReduce))


/*
Pass a callback and an initial value to reduce that will subtract all the
expenses in the array from the initial budget This will allow us to see how
much we have left in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent',
        amount: 1000
    },
    {
        title: 'car payment',
        amount: 250
    },
    {
        title: 'food',
        amount: 300
    }
]

const remaining = expenses.reduce((a, c) => a - c.amount, budget) //initial value)

console.log(remaining)
