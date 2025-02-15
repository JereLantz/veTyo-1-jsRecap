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
