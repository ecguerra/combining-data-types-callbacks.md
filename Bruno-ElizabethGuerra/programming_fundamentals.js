//Commenting Code
/* Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out: */

//declaring function f with parameter l 
const f = l => {
//declaring variables es, p, c, & n, es, p, & n have a starting value of 0 and c is starting with 1
    let es = 0, p = 0, c = 1, n = 0
//starting a while loop. it runs as long as c is less than or equal to l
    while (c <= l) {
//n now equals the value of c plus p // semi-colon is necessary here
      n = c + p;
//I do not know what this means // I ran it and it returned [89,89] // c is 89, p is 55, n is 89
// UPDATE: I know now. It's shorthand for c=n, p=c. I guess doing it in one argument means that p assumes the current value of c, not the new n value
      [c, p] = [n, c]
//      console.log(`c = ${c}, p = ${p}, n=${n}`)
// if c mod 2 remainder is 0, es adds the value of c to itself. if it is not true, add 0
      es += (c % 2 === 0) ? c : 0
//      console.log(`es=${es}`)
    }
// This returns the value of es when the function is run 
    return es
  }
// this tells tells the console to print the result of the function with 55 as the argument. l = 55
// in this instance, it returns the value of es, which is 44
  console.log(f(57))

// c values go (2,3,5,8,13,21,34,55,89) // es value does track with only adding the evens
// n and c are always equal // p starts at 1, and then follows c // makes sense, because it starts off with n equalling c + p, and c starts at 1 while n and p start at 0 // I understand where the values of es and n come from, but I don't know why c and p increase as well every time // Maybe it's something like p = c, c = n? 

//OMG it's the friggen Fibonacci sequence again // I feel like I'm in the Da Vinci Code // pun intended

//Wow, I did not see this second piece in the instructions // Yup, it's the fiboEvens code again

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))

//QUESTION 1
/*In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

----ANSWER----
This function might be better named something like fiboEvens, because ultimately that's what it returns, up to or including the value of the argument 

es could be named sum // l could be something like num // personally I think using l on its own is confusing, because it looks too much like a 1, but that might just be me // I didn't connect c, p, and n with "current," "previous," and "next" until I saw the second function, so I'm not sure those are great variables either // I usually use variables like x,y,z or n1,n2,n3 if I'm working with numbers, because those tell my brain "math" */



//QUESTION 2
/* If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

----Answer----
//Definitely f2. I somehow missed that it was even in the readme and it took me forever to figure out what f was even doing. As soon as I looked at f2 I knew exactly what it was */



//QUESTION 3
/* Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

----ANSWER----
It is. The function returns the error of "invalid left-hand side in assignment" */