let id: number  = 5;

let ids: any[] = [1,2,3,4,5]

ids.push('Daniel')

console.log(ids)

// Tuple
let person: [number, string, boolean] = [1, 'Daniel', true];

// Tuple Array 
let employee: [number, string][];
employee = [
    [1, "Daniel"],
    [2, "Lewis"],
    [3, "munga"]
]
// union
let id_2: string | number =22 

id_2  = 'tom';

// Enum

enum Direction1{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Up)

//objects
type User={
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

// Type Assertion
let cid: any = 1

let customerId = <number>cid

//Function

function addNum(x: number, y: number): number{
    return x + y;
}
console.log(addNum(6, 8));

function log(message: string | number): void{
    console.log(message);

}
// Interfaces
interface UserInterface {
   readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}
interface MathFunct{
    (x: number, y:number): number
}
const add: MathFunct = (x:number, y: number): number => x + y

// classes
interface PersonInterface {
     id: number
     name: string
     register(): string
 }
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id:number, name: string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now Registered`
    }
}
const Dan = new Person(24, 'Mungai');
console.log(Dan.register());

class Employee extends Person{
    position: string

    constructor(id:number, name: string, position:string){
        super(id, name)
        this.position = position
    }
}
//Generics
function getArry<T>(items: T[]): T[]{
    return new Array().concat(items)
}
let numArray = getArry<number>([1,2,3,4])
let strArray = getArry<string>(['brad', 'john', 'Jill'])

numArray.push(7)