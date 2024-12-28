
// classFunction: { new (...args: any[]): T } | Function
type Constructor <T> = {new (...args: any[]) : T}
class Person {
    name: string
    constructor(name: string){
        this.name = name
    }
}
const personConstructor: Constructor<Person>=Person
const john = new personConstructor('john')

// new (...args: any[]) : T  
//  new: specifies that the function can be called as a constructor
// (...args: any[]) accepts any number of arguments of any type
//  T: The type of object that will be returned


function checkIfInstanceOf<T>(obj: T, classFunction: { new (...args: any[]): T } | Function): boolean{
    if(obj === null || obj === undefined){
        return false
    }
    let classProto = classFunction.prototype
    let currProto = Object.getPrototypeOf(obj)

    console.log('classProto--', classProto)
    while(currProto != null){
        if(classProto == currProto){
            return true
        }
        currProto = Object.getPrototypeOf(currProto)
        console.log('currProto', currProto)

    }

    return false
}

console.log(checkIfInstanceOf(new Date(), Date))
console.log(checkIfInstanceOf('123', Number))
console.log(checkIfInstanceOf(null, Number))