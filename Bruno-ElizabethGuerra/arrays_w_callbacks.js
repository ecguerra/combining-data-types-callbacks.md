//Section 3: Array Methods with Callbacks

/*A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Two arrays to work with */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

/*The first question is for the numbers array. The second question is for the words array.
You don't have to write an answer to the thought questions. */


//Every
// Determine if every number is greater than or equal to 0
console.log(nums.every(num => num >= 0))

// determine if every word shorter than 8 characters
console.log(panagram.every(word => word.length < 8))



// Filter
// filter the array for numbers less than 4
const lessThanFour = nums.filter(num => num < 4)
console.log(lessThanFour)

// filter words that have an even length
const evenLength = panagram.filter(word => word.length % 2 === 0)
console.log(evenLength)



// Find
// Find the first value divisible by 5
//const dividesBy5 = nums.find(num => num % 5 === 0)
console.log(nums.find(num => num % 5 === 0))

// find the first word that is longer than 5 characters
// const longerThan5 = panagram.find(word => word.length > 5)
console.log(panagram.find(word => word.length > 5)) // undefined - There isn't a word in the array longer than 5 characters // > 4 returns 'quick'



// Find Index
// find the index of the first number that is divisible by 3
console.log(nums.findIndex(num => num % 3 === 0))

// find the index of the first word that is less than 2 characters long
console.log(panagram.findIndex(word => word.length < 2)) // -1 because there isn't a word with less than 2 characters in the array



// For Each
// console.log each value of the nums array multiplied by 3

//console.log goes inside the forEach, otherwise it comes back undefined
nums.forEach(num => console.log(num*3))

// console.log each word with an exclamation point at the end of it
panagram.forEach(word => console.log(`${word}!`))


// Thought Questions
// What happened to the original array? //It's still there; forEach doesn't change the data
// Can you store the values from a forEach method in a new array? // Yup, and it's a good idea to if you need them later



// Map
// make a new array of each number multiplied by 100
const bigNums = num => num*100
console.log(nums.map(bigNums))

// make a new array of all the words in all uppercase
const loud = word => word.toUpperCase()
const loudPan = panagram.map(loud)

console.log(loudPan)


// Thought Questions
// What happened to the original array? //It's still there; map makes a new array
// Can you store the values from a map method in a new array? // I can and I did!



// Some
// Find out if some numbers are divisible by 7
console.log(nums.some(num => num%2===0))

// Find out if some words have the letter a in them
const includesA = word => word.includes('a')
console.log(panagram.some(includesA))



// Hungry for More

// Reduce
// Add all the numbers in the array together using the reduce method
const addEmUp = (num,current) => {
  current+= num
  return current
}

console.log(nums.reduce(addEmUp))

// concatenate all the words using reduce
const giantWord = (giant, word) => {
  return giant.concat('',word)
}

console.log(panagram.reduce(giantWord))
console.log(panagram)
// Thought Questions
// What happened to the original array? // It's still there, don't be scared



// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(nums.sort()) // Nope, it's going numerically by first digit [ 0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort()) // Almost, but the capital T is sorted to the [0] index [ 'The',   'brown',  'dog',   'fox',  'jumps', 'lazy',  'over',  'quick',  'the' ]

// Sort the numbers in ascending order
console.log(nums.sort((a,b) => a - b))

// Sort the numbers in descending order
console.log(nums.sort((a,b) => b - a))
console.log(nums)
// Sort the words in ascending order
//gonna borrow my map array from before // Ahahaha cheating but not actually cheating

console.log(loudPan.sort())

// Sort the words in descending order
console.log(loudPan.reverse())


// Thought Questions
// What happened to the original array? // It is sorted now! Sort changes the original array - gasp!



// Array Methods Challenge Problems

// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once
// const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// const includesA = word => word.includes('a')
const isPanagram = (word) => {
  for (letter of alphabet) {
    loudWord = word.toUpperCase()
    console.log(`${letter}: ${loudWord.includes(letter)}`)
  }
}

const allTogether = panagram.reduce(giantWord)

isPanagram(allTogether) // I don't know if this was what we were supposed to do, but it works.



// Working with data

const products = [
  {
    "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]
  // filter for products with a price that is less than 10, using the array above
  const bargain = products.filter((item => item.price < 10))
  console.log(bargain)

  // sort alphabetically by product name
  //const getName = (item) => item.name
//  const productNames = products.forEach(item => console.log(item.name))

// console.log(products.sort((a, b) => {
//   if (a.name > b.name) return 1
//   else return -1
// }))

//fancy short version
console.log(products.sort((a, b) => (a.name > b.name) ? 1 : -1))