// Extending an interface
interface Animal{
    name:string,
    sound: ()=>void
}
interface Bear extends Animal{
    honey: boolean,
    climbTrees: ()=> void
}

const bear: Bear = {
    name: 'Grizzly',
    honey: true,
    sound: ()=>{
        console.log('Growl')
    },
    climbTrees: ()=>{
        console.log('Climbing.....')
    }
}
console.log(bear.name)  //Grizzly
bear.sound()   //Growl
bear.climbTrees()   //Climbing.....
console.log(bear.honey)  //true

// Extending a Type Using Intersections
type Animal2 = {
    name: string,
    sound: ()=> void
}

type Bear2 = Animal2 & {
    honey: boolean,
    climbTrees(): void
}

const bear2:Bear2 = {
    name: 'Panda',
    honey: true,
    sound: () => console.log("Munch!"),
    climbTrees: () => console.log("Scaling bamboo..."),
}
console.log(bear2.name)
console.log(bear2.honey)
bear2.sound()
bear2.climbTrees()


