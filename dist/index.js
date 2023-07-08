"use strict";
let id = 5;
let ids = [1, 2, 3, 4, 5];
ids.push('Daniel');
console.log(ids);
// Tuple
let person = [1, 'Daniel', true];
// Tuple Array 
let employee;
employee = [
    [1, "Daniel"],
    [2, "Lewis"],
    [3, "munga"]
];
// union
let id_2 = 22;
id_2 = 'tom';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
let customerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(6, 8));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now Registered`;
    }
}
const Dan = new Person(24, 'Mungai');
console.log(Dan.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
//Generics
function getArry(items) {
    return new Array().concat(items);
}
let numArray = getArry([1, 2, 3, 4]);
let strArray = getArry(['brad', 'john', 'Jill']);
numArray.push(7);
