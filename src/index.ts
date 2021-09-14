// Basic Tyoes
// create variable name,  add the type after
let id: number = 5
let food: string = 'hamburger'
let isTall: boolean = true
let x: any = 'any type and can be reassingn'

// id = "A string"   --> will be an error since id is a number, can't be assign as a string type


// An array of only type number
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'hello']

// ids.push('Hello')   --> will error, string is not assignable to type number


//Tuple
let person: [number, string, boolean] = [1, 'Fred', true]
// the argument order matter

//Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Bob'],
  [2, 'Kev'],
  [3, 'Mie'],
  [4, 'Pal'],
]


// Union
let code: string | number
code = 22
code = 'ten'


// Enum - can be number or string
enum Direction1{
  Up,
  Down,
  Left,
  Right,
}

enum Direction2{
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}


// Objects
type User = {
  id:number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}


// Type Assertion
let cid: any = 1

// Two ways.
// let customerID = <number>cid  --> cid type was any , now asseting it as a number
let customerID = cid as number


//Functions
//Arg type, Function return value as a number as well
function addNum(x: number, y: number): number {
  return x + y
}


// Void  - return value isn't anything
function log(message: string | number): void {
  console.log(message)
}


// Interfaces  ---> Use with objects
interface UserInterface {
  readonly id:number
  name: string
  age?: number //optional argument
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

// --> types can be used primitive and unions
type Point = number | string
const p1: Point = 1

// user1.id = 5 will error because readonly

// Interface with Function
interface MathFunc {
  (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y

// Classes
class Person {
  // 3 options public by default, private, and protected
  //private id: number
  //protected id: number
  id: number
  name: string

  constructor(id:number, name:string){
    this.id = id
    this.name = name
  }

  // Adding method in a class
  register(){
    return `${this.name} is registered`
  }
}

const person1 = new Person(1, 'Mikey')

console.log(person1.register())
