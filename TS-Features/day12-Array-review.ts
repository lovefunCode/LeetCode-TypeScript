
// 1. Object static methods

interface Item{
    name: string,
    type: string,
    quantity: number
}

const inventory: Item[] = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
]


// const result = Object.groupBy(inventory, ({quantity})=>{
//     return quantity.sort((a, b)=> a-b)
// })


const sortArr = inventory.sort((a,b)=>{
    return a.quantity-b.quantity
})
// sort mutate the original array
console.log('sortArr', sortArr)
console.log('inventory', inventory)

const sortedInventoryWithReduce = inventory.reduce<Item[]>((acc, curr)=>{
    acc.push(curr)
   return acc.sort((a, b)=>a.quantity-b.quantity)
}, [])


const sortedInventoryWithReduce2 = inventory.reduce((acc, curr)=>{
    acc.push(curr)
   return acc.sort((a, b)=>a.quantity-b.quantity)
}, [] as Item[])


