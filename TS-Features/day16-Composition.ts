// composition(preferred approach)
// composition focuses on combining behaviours rather than inheriting from a 
// single base class. we use interface and dependency injection to compose behaviours

// 1/ basic composition
const soundBehaviour = (sound: string)=> ({
    makeSound: ()=> console.log(sound)
})
const moveBehaviour = (movement: string)=>{
   return {
        move: ()=> console.log(movement)
   }
}
const animal = (name: string, sound: string, movement: string)=>{
    return {
        name,
        ...soundBehaviour(sound),
        ...moveBehaviour(movement)
    }
}

//2 composition with facotry functions
const createAnimal = (name : string) =>{
    return {
        name, 
        getName: ()=> console.log(`This is a ${name}`)
    }
}
const canBark = ()=>({
    bark: ()=> console.log('woof! woof!')
})

const dog = Object.assign({}, createAnimal('dog'), canBark())
dog.getName()
dog.bark()

// 1. composition is more flexible than inheritance
// 2. Behaviours can be easily swapped or extended
// 3. No deep class hierarchies,  making maintenance easier
