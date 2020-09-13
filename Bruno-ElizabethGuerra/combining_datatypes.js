//Combine objects, arrays, and functions

/*1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.*/

const crayonBox = {
    brand: 'Crayola',
    crayons: ['brown', 'blue', 'red', 'green', 'chartreuse'],
    size: 64
}

console.log(crayonBox.crayons[3])


/*2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.*/

const bottle = {
    cap: {color: 'white', material: 'metal'},
    body: 'glass'
}

console.log(bottle.cap.material)


/*3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.*/

const receipt = [
    {name: 'eggs', price: 5},
    {name: 'milk', price: 4},
    {name: 'peanut butter', price: 5}
]

console.log(receipt[2].name)


/* 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.*/

const apartmentBuilding = [
    ['Katie','Jen','Shaniqua'],
    ['Elizabeth','Andy','Tali','Cora','Eloise'],
    ['Janae','Jane'],
    ['Brittany','Jeremy']
]

console.log(apartmentBuilding[1][2])

//git commit



//Combine objects, arrays, and functions more than one level deep

/*1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).*/
const knit = () => {
    return  {
        item: 'scarf',
        size: 6,
        unit: 'feet',
        material: 'wool'
    }
}

knit().material


/*2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array. */

const crayonSelector = () => {
    return crayonBox.crayons
}

crayonSelector()[0]


/* 3.Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function */

const powerButton = () => {
     const options = () => {
        console.log('Choose a channel')
    }
    return options()
}

powerButton()

//git commit



//Model a Vending Machine

//a vending machine is an object

const vendingMachine = {
    //it has an array of snacks (make 3 snacks)
    snacks: [
        //snacks are objects that have a name and a price
        {name:'Butterfinger', price: 2},
        {name: 'Nestle Crunch', price: 1},
        {name: 'Kit-Kat', price: 2}
    ],
    //a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
    vend: (num) => {
        return vendingMachine.snacks[num].name
    }
}

//Be able to call vendingMachine.vend() with a valid integer to return a snack

vendingMachine.vend(2)

//git commit



//Callbacks

//Make a function add that takes two arguments (numbers) and sums them together
const add = (x,y) => {return x + y}
console.log(add(3,7))

//Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (x,y) => {return x - y}
console.log(subtract(9,6))

//Make a function multiply that takes two arguments and multiplies them
const multiply = (x,y) => {return x*y}
console.log(multiply(9,6))

//Make a function divide that takes two arguments and divides them
const divide = (x,y) => {return x/y}
console.log(divide(21,3))

//Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

const calculate = (func,x,y) => {
//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
    return func(x,y)
}

//Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(multiply,4,5))
console.log(calculate(divide,20,5))
console.log(calculate(subtract,16,5))
console.log(calculate(add,3,5))



//Function definition placement
//Clean up this code, so that it works and has function definition is in the correct place

//bar();
const bar = () => {
    console.log('bar here');
}
bar()
//foo();

const foo = () => {
    console.log('foo here');
}
foo()

//Error reading
//What is meant by the error(s) this produces?

        // foo();

        // const foo ()=>{
        //     console.log('hi');
        // }

//It's trying to call the function before declaring it. foo() should be called under the function definition