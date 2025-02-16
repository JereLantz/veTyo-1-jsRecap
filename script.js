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
//console.log(numArray.filter((value) => {return value < 2}))
console.log(numArray.filter((value) => value < 2))

console.log("map() with an arrow function to multiply each number by 2.")
//console.log(numArray.map((value) => {return value * 2}))
console.log(numArray.map((value) => value * 2))
console.log("----------------------------------------")

console.log("4. Objects and Classes")
class Car{
    /**
     * @param {string} make 
     * @param {string} model 
     * @param {number} year 
     */
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    getCarInfo(){
        return `${this.make} ${this.model} ${this.year}`
    }
}

const car = new Car("auto", "neli-pyöräinen", 1969)
const car1 = new Car("ford", "mondeo", 1999)
const car2 = new Car("mazda", "auto", 2015)
const car3 = new Car("toyota", "joku", 2024)
console.log(car.getCarInfo())
console.log(car1.getCarInfo())
console.log(car2.getCarInfo())
console.log(car3.getCarInfo())
console.log("----------------------------------------")

console.log("5. Spread Operator and Destructuring")
const user = {
    Name:"Jaska Jokunen",
    email:"jokunen@hotmail.com",
    address:{
        country:"Finland",
        city:"Vaasa",
        street:"Jokukuja 69"
    }
}

const {Name, email, address} = user
console.log("Original object")
console.log(user)

console.log("Destructured data")
console.log(Name)
console.log(email)
console.log(address)

console.log("spread operation to user")
const spreadUser = {
    ...user,
    email:"toinen@hotmail.com"
}
console.log(spreadUser)
console.log("----------------------------------------")
