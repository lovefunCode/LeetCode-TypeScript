class Singleton{
    timestamp: number = 0
    // static makes the property belong to the class itself(not individual instances), 
    // creating a universal access point
    static instance: Singleton
    constructor(){
        // check the class's shared storage
        if(Singleton.instance){
            return Singleton.instance
        }
        this.timestamp = Date.now()
        Singleton.instance = this
        return this
    }
    getTime(){
        return this.timestamp
    }
}

// Test
const a = new Singleton()
const b = new Singleton()
console.log(a === b)



