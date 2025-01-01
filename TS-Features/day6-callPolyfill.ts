type JSONValue = null | boolean | number | string | JSONValue[] | {[key: string]: JSONValue}

// Error TS2339: This error (Property 'callPolyfill' does not exist on type 'Function')

// In TS, when you add custom methods to built-in objects like Function, 
// the TS compiler doesn't automatically recognize those extensions, To inform TS
// about the new property of method(callPolyfill in this case), you must extend the 
// appropriate type Function via an interface to ensure that TS can validate usage
// of the method correctly
interface Function {
    callPolyfill(context: Record<string, JSONValue>, ...args: JSONValue[]): JSONValue | void
}

Function.prototype.callPolyfill = function(this: Function, context, ...args): JSONValue | void{
    console.log(this)
    console.log(context)
    return this.apply(context, args)

}

function increment(this: {count: number}): number{
    this.count++
    return this.count
}

function decrement(this: {count: number}): number{
    this.count--
    return this.count
}

console.log(increment.callPolyfill({count: 3}))