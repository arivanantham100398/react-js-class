React Hook

Hooks allow us to "hook" into React features such as state and lifecycle methods.

There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

Important Hooks

React provides a bunch of standard in-built hooks:

useState: To manage states. Returns a stateful value and an updater function to update it.
useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
useContext: To return the current value for a context.
useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
useMemo: It returns a memoized value that helps in performance optimizations.
useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.