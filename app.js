// Advanced Array 
const array = [1,2,3,4,5,12];
console.log(array);
const doubleArray = [];
const newArray =  array.forEach((num) => {
    doubleArray.push( num + 2);
})

console.log('foreach',doubleArray);

//map, filter, reduce
const mapArray = array.map(name => name * 2);

console.log('map',mapArray);

//filter 
const filterArray = array.filter(num => num > 5);
console.log(filterArray);

//reduce
const reduceArray = array.reduce((acc, num) => {
    return num + acc;
}, 1);

console.log('reduce', reduceArray);

// Advanced Object 
// Refercence type 
var object = {value: 10};
var object2 = object;
var object3 = {value: 15};
//context vs scope
var object4 = {
    a: function() {
        console.log(this);
}
}
//instantiation
class Player {
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }
    introduce () {
        console.log(`hi i am ${this.name}, i'm a ${this.type}` );
    }
} 

class Wizard extends Player {
    constructor (name, type) {
        super(name, type)
    }
    play () {
        console.log(`we i'm  a ${this.type}`);
    }
}

const wizard1 = new Wizard(`Ducthanhpr`, `Healer`);
const wizard2 = new Wizard(`Quynhham`, `Dark Magic`);
// Classical Inheritance 
// var Player = function (name, type) {
//     this.name = name;
//     this.type = type;
// }
// Player.prototype.introduce = function () {
//     console.log(`Hi i'm ${this.name}, i'm a ${this.type}`);
// }
// const wizard1 = new Player(`Ducthanhpr`, `Healer`);
// const wizard2 = new Player(`Quynhham`, `Dark Magic`);

// wizard1.play = function () {
//     console.log(`weee I'm a ${this.type}`);
// }
// wizard2.play = function () {
//     console.log(`weee I'm a ${this.type}`);
// }
