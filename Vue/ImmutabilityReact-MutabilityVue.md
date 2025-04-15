## <!-- react: immutability(immutable state updates) -->
In react, state is immutable, you should never modify the existing state directly. Instead, you create a new state object and update it using setState(for class components) or the useState/useReducer hooks(functional components)
# why immutability?
1. Ensures predictable state updates
2. Helps with performance optimizations(eg: PureComponent, React.memo())
3. Enables time-travel debugging(undo/redo features)
4. Plays well with Redux, which enforcement immutablity

### React enforces immutablity to help with performance and predictability

## <!-- Vue: Mutability(Reactive state updates) -->
Vue allows direct modification of state because it wraps objects in Proxies to track changes at runtime. This makes reactivity feel more intuitive.
# Why Mutability?
1. More natural syntax(no need for setState or spread operators)
2. Efficient reactivity using proxies(automatically tracks changes)
3. Less boilerplate code.

### Vue uses a mutable system that automatically tracks changes using proxies

## Using Immer in Vue allows for an immutable approach while keeping Vue's easy syntax




