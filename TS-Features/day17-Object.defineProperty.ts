//  Object.defineProperty(obj, propertyName, descriptor)
// obj: The object on which to define the property.
// propertyName: The name of the property to define or modify.
// descriptor: an object that defines property behavior

const user:any = {}
Object.defineProperty(user, 'name', {
    value: 'Alice',
    writable: false,  // cannot be changed
    enumerable: true,  // shows up in loops
    configurable: false,  // cannot be deleted
})

console.log(user.name)   //Alice
// user.name = 'Bob'
// console.log(user.name)   //TypeError: Cannot assign to read only property 'name' of object '#<Object>'

const person: any = {
    _age: 25   
}
Object.defineProperty(person, 'age', {
    get(){
        return this._age
    },
    set(value: number){
        if(value < 0 ){
            console.log('Age cannot be negative')
        }else{
            this._age = value
        }
    },
    enumerable: true
})

console.log(person.age)   // 25
person.age = 30
console.log(person.age)  // 30

//Object.defineProperty used to define or modify a single property on an object
// requiring specifying property descriptors(value, writable, enumberable, configurable)

// Object.defineProperties used to define multiple properties at once on an object

const user2 : any = {}
Object.defineProperties(user2, {
    name: {
        value: "Alice",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age:{
        value: 24,
        writable: false,  // read-only
        enumerable: true,
        configurable: true
    }
})

console.log(user2.name, user2.age)  //Alice 24

