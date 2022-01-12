React detects any state-changing immediately, then the component that contains the changed state will be re-rendered.
Every render or re-render of a react component will update the virtual DOM and based on that the real DOM will be updated with the necessary changes.

Sometimes for a performance reasons we want to change the state of our application without triggering any extra re-render because in large applications every unnecessary re-render has a cast.
