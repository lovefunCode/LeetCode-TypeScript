// Reactivity is a programming paradigm, that allows us to adjust to changes in a declarative manner.

// Vue2 use getter and setter exclusively due to browser support limitations.
// In Vue3 , proxies are used for reactive objects and getter/setters are used for refs.

function reactive(obj){
    return new Proxy(obj, {
        get(target, key){
            track(target, key)
            return target[key]
        },
        set(target, key, value){
            target[key] = value
            trigger(target, key)
        }
    })
}

function ref(value){
    const refObject = {
        get value(){
            track(refObject, 'value')
            return value
        },
        set value(newVlaue){
            value = newVlaue
            trigger(refObject, 'value')
        }

    }
    return refObject
}

//  This will be set right before an effect is about to be run, we'll deal wtih this later.
let activeEffect
function track(target, key){
    if(activeEffect){
        const effects = getSubscribersForProperty(target, key)
        effects.add(activeEffect)
    }
}

// Effect subscriptions are stored in a global, <WeakMap<target, Set<effect>>>, data structure.

function trigger(target, value){
    const effects = getSubscribersForProperty(target, key)
    effects.forEach(effect => {
        effect()
    });
}

// runtime reactivity(Vue) vue's reactivity system works at runtime, meaning it tracks dependencies
//  and triggers updates while the application is running in the browser
<script setup>
import {ref, reactive} from "vue"
const count = ref(0) // ref is needed because JS does not allow reactive primitives
const state = reactive({
    message: 'hello, vue'
})

function increment(){
    count.value ++ // vue tracks changes and updates the DOM automatically
}
</script>

//  vue tracks count.value at runtime, detecting changes and updating the DOM when count.value changes
//  vue wraps objects in proxies(using ref and reactive) to make them reactive
// no compilation step is needed -- it works dynamically in the browser


// slightly more overhead(tracking at runtime), limited by js's rules, not required build step but can use vite
// In standard JS, there is no way to detect the access or mutations of plain variables,
//  The value property gives vue the opportunity to detect when a ref has been accessed or mutated,
// under the hood, vue performs the tracking in its getter, and performs triggering in its setter.






