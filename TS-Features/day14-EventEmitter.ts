
type CallBack = (...args: any[]) => any
type Subscription = {
    unsubscribe: ()=> void
}
class EventEmitter{
    eventMap: Record<string, Set<CallBack>> = {}
    subscribe(eventName: string, callback: CallBack): Subscription{
        if(!this.eventMap[eventName]){
            this.eventMap[eventName] = new Set()
        }
        this.eventMap[eventName].add(callback)
        return {
            unsubscribe: ()=>{
                if(this.eventMap[eventName]){
                    this.eventMap[eventName].delete(callback)
                }
            }
        }
    }
    emit(eventName: string, args: any[]=[]): any[]{
        return this.eventMap[eventName] ? 
        Array.from(this.eventMap[eventName]).map(itemCb=>{
           return itemCb(...args)
        }) : []
    }
}

const emitter = new EventEmitter();
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')) // [99]
console.log(sub.unsubscribe())    //undefined
console.log(emitter.emit('onClick')) // []