//@ts-check

/**
 * @param {number} radius
 * @returns {number}
 */
function calculateArea(radius){
    const Pi = Math.PI
    return Pi * (radius ** 2)
}

/**
 * compares the numbers and returns the larger
 * @param {number} a
 * @param {number} b 
 * @returns {number}
 */
function compareNumbers(a,b){
    if(a > b){
        return a
    }
    else{
        return b
    }
}

console.log("2. Revisiting Variables, Operators, and Functions")
console.log("calculate area")
console.log(calculateArea(3))
console.log(calculateArea(5.6))
console.log(calculateArea(19))

console.log("comparison")
console.log(compareNumbers(1,2))
console.log(compareNumbers(5,2))
console.log(compareNumbers(10,20))
console.log(compareNumbers(-1,3))
console.log("----------------------------------------")

console.log("3. arrow functions and arrays")
const numArray = [1, 2, 3, 4, 5]

console.log("filter() to filter numbers greater than 2.")
console.log(numArray.filter((value) => {return value < 2}))

console.log("map() with an arrow function to multiply each number by 2.")
console.log(numArray.map((value) => {return value * 2}))
console.log("----------------------------------------")
