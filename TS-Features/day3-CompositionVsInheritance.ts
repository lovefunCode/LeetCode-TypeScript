// Example 1:  Flexible Role Management System
// Inheritance
class User{
    constructor(public name: string){

    }
    getPermissions(): string[]{
        return ['read']
    }
}

class Admin extends User{
    getPermissions(): string[] {
        return [...super.getPermissions(), 'write', 'delete']
    }
}

const user = new User('Alice')
console.log(`${user.name} permissions:`, user.getPermissions()); // ["read"]

const admin = new Admin('Bob')
console.log(`${admin.name} permissions:`, admin.getPermissions()); // ["read", "write", "delete"]

// Composition
type PermissionsType = {
    getPermission: ()=> string[]
}
const readPermission = (): PermissionsType =>{
    return {
        getPermission: ()=>['read']
    }
}
const writePermission = (): PermissionsType=>{
    return{
        getPermission: ()=>['write'] 
    }
}
const deletePermission = (): PermissionsType=>{
    return {
        getPermission: ()=>['delete']
    }
}

const createUser = (name: string, permissions: PermissionsType[]) : {name: string, getPermission: ()=>string[]}=>{
    return {
        name,
        getPermission : ()=>{
           return permissions.flatMap((perm)=>perm.getPermission())
        }
    }
}
